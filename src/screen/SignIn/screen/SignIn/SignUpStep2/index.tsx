import React, {memo, useMemo} from 'react';
import {StatusBar, useWindowDimensions} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {useTheme} from 'styled-components';
import useSignInNavigation from '~/hooks/useSignInNavigation';
import HeaderOptions from '~/components/HeaderOptions';
import Text from '~/components/Text';
import Separator from '~/components/Separator';
import Input from '~/components/Input';
import Button from '~/components/Button';
import {schemaSignUpStep2} from '../SignUpStep2/validation';
import Bar from 'react-native-progress/Bar';

import {Container} from './styles';
import BackButton from '~/components/BackButton';
import {useRoute} from '@react-navigation/native';

const SignUp = () => {
    const {width} = useWindowDimensions();
    const {spacing, colors} = useTheme();
    const {params} = useRoute();
    const navigation = useSignInNavigation();

    console.log({params});

    //UseForms
    const {
        control,
        handleSubmit,
        setValue,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schemaSignUpStep2),
        defaultValues: {
            password: '',
            confirmPassword: '',
        },
    });

    //memo
    const widthProgressBar = useMemo(() => {
        const pressableXWidth = 35;
        const marginScreenWidth = spacing.md * 3;
        const centerHeaderOptionWidth = spacing.md;
        const value =
            width -
            (marginScreenWidth + pressableXWidth + centerHeaderOptionWidth);
        return value;
    }, [width, spacing]);

    //callback

    const handleGoBack = () => navigation.goBack();

    const onSubmit = async () => {
        await handleSubmit(
            ({password, confirmPassword}) => {
                console.log({password, confirmPassword});
                navigation.navigate('signUp');
            },
            () => console.error('Form Inválido'),
        )();
    };

    return (
        <Container>
            <StatusBar barStyle="dark-content" />
            <HeaderOptions
                left={<BackButton icon="back" onPress={handleGoBack} />}
                center={<Separator width={spacing.md} />}
                right={
                    <Bar
                        progress={1}
                        color={colors.primary.main}
                        unfilledColor={colors.surface50.main}
                        height={6}
                        width={widthProgressBar}
                    />
                }
            />
            <Separator height={spacing.md} />
            <Text typography="h3">Cadastro</Text>
            <Separator height={spacing.md} />
            <Text color="surface100" typography="caption">
                {`Sua senha precisa ter pelo menos  \n8 caracteres`}
            </Text>
            <Separator height={spacing.md} />
            <Controller
                control={control}
                name="password"
                render={({field: {onBlur, onChange, value, ref}}) => (
                    <Input
                        ref={ref}
                        autoCapitalize="none"
                        autoComplete="password"
                        label="Senha"
                        secureTextEntry
                        iconColor="primary"
                        onChange={onChange}
                        onChangeText={text => setValue('password', text)}
                        value={value}
                        onBlur={onBlur}
                        error={errors.password?.message}
                    />
                )}
            />
            <Controller
                control={control}
                name="confirmPassword"
                render={({field: {onBlur, onChange, value, ref}}) => (
                    <Input
                        ref={ref}
                        autoCapitalize="none"
                        autoComplete="password"
                        label="Confirmar senha"
                        secureTextEntry
                        iconColor="primary"
                        onChange={onChange}
                        onChangeText={text => setValue('confirmPassword', text)}
                        value={value}
                        onBlur={onBlur}
                        error={errors.confirmPassword?.message}
                    />
                )}
            />

            <Separator height={spacing.md} />
            <Button onPress={onSubmit}>Finalizar</Button>
            <Separator height={spacing.md} />
        </Container>
    );
};

export default SignUp;
