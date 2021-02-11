import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import Logo from '../../assets/images/logo.svg';
import { Background, Container, Content } from './styles';

export const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="goBarber" />

        <form>
          <h1> Faça seu logon </h1>

          <input type="email" placeholder="E-mail" />

          <input type="password" placeholder="Senha" />

          <button type="submit"> Entrar </button>

          <a href="#"> Esqueci minha senha </a>
        </form>

        <a href="#">
          <FiLogIn /> Criar conta
        </a>
      </Content>

      <Background></Background>
    </Container>
  );
};
