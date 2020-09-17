/* eslint-disable no-unused-expressions */
import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../context/AuthContext';

import { Background, Container, Content } from './style';
import getValidationErros from '../../utils/getValidationErrors';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FunctionComponent = () => {
  const formRef = useRef<FormHandles>(null);

  const { sigIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      formRef.current?.setErrors({});
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha Obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        sigIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        const errors = getValidationErros(err);
        formRef.current?.setErrors(errors);
        console.error(errors);
      }
    },
    [sigIn],
  );

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu Logon</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci a senha</a>
        </Form>

        <a href="login">
          <FiLogIn />
          Criar a conta
        </a>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
