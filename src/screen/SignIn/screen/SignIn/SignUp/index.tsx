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
import {schemaSignUp} from './validation';

import Bar from 'react-native-progress/Bar';

import {Container} from './styles';
import BackButton from '~/components/BackButton';

const SignUp = () => {
    const {width} = useWindowDimensions();
    const {spacing, colors} = useTheme();
    const navigation = useSignInNavigation();

    //UseForms
    const {
        control,
        handleSubmit,
        setValue,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schemaSignUp),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
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
            ({email, firstName, lastName}) => {
                console.log({email, firstName, lastName});
                navigation.navigate('signUpStep2', {
                    email,
                    firstName,
                    lastName,
                });
            },
            () => console.error('Form Inválido'),
        )();
    };

    return (
        <Container>
            <StatusBar barStyle="dark-content" />
            <HeaderOptions
                left={<BackButton icon="closeX" onPress={handleGoBack} />}
                center={<Separator width={spacing.md} />}
                right={
                    <Bar
                        progress={0.5}
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
                Informações pessoais
            </Text>
            <Separator height={spacing.md} />
            <Controller
                control={control}
                name="firstName"
                render={({field: {onBlur, onChange, value, ref}}) => (
                    <Input
                        ref={ref}
                        label="Nome"
                        onChange={onChange}
                        onChangeText={text => setValue('firstName', text)}
                        value={value}
                        onBlur={onBlur}
                        error={errors.firstName?.message}
                    />
                )}
            />
            <Controller
                control={control}
                name="lastName"
                render={({field: {onBlur, onChange, value, ref}}) => (
                    <Input
                        ref={ref}
                        label="Sobrenome"
                        onChange={onChange}
                        onChangeText={text => setValue('lastName', text)}
                        value={value}
                        onBlur={onBlur}
                        error={errors.lastName?.message}
                    />
                )}
            />
            <Controller
                control={control}
                name="email"
                render={({field: {onBlur, onChange, value, ref}}) => (
                    <Input
                        ref={ref}
                        autoCapitalize="none"
                        autoComplete="email"
                        keyboardType="email-address"
                        onChange={onChange}
                        onChangeText={text => setValue('email', text)}
                        value={value}
                        onBlur={onBlur}
                        label="Email"
                        error={errors.email?.message}
                    />
                )}
            />

            <Separator height={spacing.md} />
            <Button onPress={onSubmit}>Continuar</Button>
            <Separator height={spacing.md} />
        </Container>
    );
};

export default SignUp;
