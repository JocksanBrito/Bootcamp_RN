import React from 'react';
import {StatusBar} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {Container, AccessText} from './styles';

import Icon from '~/components/Icon';
import HeaderOptions from '~/components/HeaderOptions';
import Text from '~/components/Text';
import Separator from '~/components/Separator';
import {useTheme} from 'styled-components';
import Input from '~/components/Input';
import Button from '~/components/Button';
import useSignInNavigation from '~/hooks/useSignInNavigation';
import {schemaLogin} from './validation';
import BackButton from '~/components/BackButton';

const Login: React.FC = () => {
    const {spacing} = useTheme();
    const navigation = useSignInNavigation();

    //UseForms
    const {
        control,
        handleSubmit,
        setValue,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schemaLogin),
        defaultValues: {
            email: '',
            password: '',
        },
    });
    //callback
    const handleGoBack = () => navigation.goBack();

    const onSubmit = async () => {
        await handleSubmit(
            ({email, password}) => {
                console.log({email, password});
            },
            () => console.error('Form Inválido'),
        )();
    };

    return (
        <Container>
            <StatusBar barStyle="dark-content" />
            <HeaderOptions
                left={<BackButton icon="closeX" onPress={handleGoBack} />}
                right={
                    <Text color="primary" typography="body1">
                        Esqueci minha senha
                    </Text>
                }
            />
            <Separator height={spacing.md} />
            <Text typography="h3">Login</Text>
            <Separator height={spacing.md} />

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
                        icon="checkCircle"
                        iconColor="primary"
                        error={errors.email?.message}
                    />
                )}
            />
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
            <Separator height={spacing.md} />
            <Button onPress={onSubmit}>Login</Button>
            <Separator height={spacing.md} />
            <AccessText color="surface500" typography="body3">
                Ou acesse com login social
            </AccessText>
            <Separator height={spacing.md} />
            <Button
                typography="caption"
                icon={<Icon icon="apple" />}
                color="secundary"
                mode="outlined">
                Continuar com a Apple
            </Button>
            <Separator height={spacing.md} />
            <Button
                typography="caption"
                icon={<Icon icon="google" />}
                color="secundary"
                mode="outlined">
                Continuar com a Google
            </Button>
        </Container>
    );
};

export default Login;
