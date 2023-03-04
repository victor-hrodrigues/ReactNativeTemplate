import { AppInputFormMask } from '@components/AppInputFormMask';
import { AppInputPasswordForm } from '@components/AppInputPasswordForm';
import { AppKeyboardAvoidingView } from '@components/AppKeyboardAvoidingView';
import { AppModal } from '@components/AppModal';
import { AppText } from '@components/AppText';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '@hooks/user';
import { SignInCredentials } from '@interfaces/UserInfo';
import { showLoading } from '@utils/loadingIndicator';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Keyboard } from 'react-native';
import * as yup from 'yup';
import {
  Container,
  Content,
  LoginText,
  SignInButton,
  WelcomeText,
  WrapperInput,
} from './styles';

export const SignIn = (): JSX.Element => {
  const { signIn } = useAuth();

  const schema = yup.object().shape({
    email: yup
      .string()
      .required('E-mail é obrigatório')
      .matches(
        /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Email deve ser válido'
      ),
    password: yup
      .string()
      .required('Senha é obrigatório')
      .min(6, 'Senha é obrigatório'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<SignInCredentials>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const showModal = () => {
    setModalOpen(true);
    Keyboard.dismiss();
  };
  const hideModal = () => {
    setModalOpen(false);
    Keyboard.dismiss();
  };

  async function onSubmit(data: SignInCredentials) {
    setLoading(true);
    await signIn({
      email: data.email,
      password: data.password,
    })
      .catch(err => {
        setModalMessage(err.response.data.title);
        showModal();
      })
      .finally(() => setLoading(false));
  }

  return (
    <>
      {loading && showLoading()}
      <AppKeyboardAvoidingView>
        <Container>
          <Content>
            <WelcomeText textColor="gray300" variant="h5">
              Bem vindo
            </WelcomeText>
            <LoginText textColor="gray300" variant="paragraph">
              Faça login e acesse o App.
            </LoginText>

            <WrapperInput>
              <AppInputFormMask
                control={control}
                error={errors.email && errors.email.message}
                keyboardType="email-address"
                autoCapitalize="none"
                name="email"
                label="E-mail"
                placeholder="Digite aqui seu e-mail"
                textContentType="emailAddress"
                autoCompleteType="email"
              />
            </WrapperInput>

            <WrapperInput>
              <AppInputPasswordForm
                control={control}
                error={errors.password && errors.password.message}
                name="password"
                label="Senha"
                placeholder="Digite aqui sua senha"
                textContentType="newPassword"
                autoCompleteType="password"
              />
            </WrapperInput>

            <SignInButton
              buttonColor={!errors ? 'gray100' : 'blue500'}
              textColor={!errors ? 'gray300' : 'white'}
              onPress={handleSubmit(onSubmit)}
              disabled={!isDirty || !isValid}>
              Entrar no App
            </SignInButton>
          </Content>
        </Container>
      </AppKeyboardAvoidingView>
      <AppModal
        visible={modalOpen}
        onDismiss={hideModal}
        variant="alert"
        title="Erro">
        <AppText textColor="gray500" variant="paragraph">
          {modalMessage}
        </AppText>
      </AppModal>
    </>
  );
};
