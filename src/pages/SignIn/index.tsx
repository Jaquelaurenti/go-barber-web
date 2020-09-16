import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Background, Container, Content } from './style';
import { Form } from '@unform/web';

const SignIn: React.FunctionComponent = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <Form onSubmit={() => {}}>
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

export default SignIn;
