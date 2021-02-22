import { Formik } from 'formik';
import React from 'react';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import Logo from '../../assets/images/logo.svg';
import { Button, Input } from '../../components';
import { useAuth } from '../../hook/auth';
import { useToast } from '../../hook/toast';
import {
  AnimationContainer,
  Background,
  Container,
  Content,
  FormFormik,
} from './styles';

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Digite um email válido')
    .required('Email obrigatorio'),
  password: Yup.string()
    .required('Senha Obrigatoria')
    .min(6, 'Mínimo 6 caracteres'),
});

export const SignIn: React.FC = () => {
  const { user, SignIn } = useAuth();
  const { addToast } = useToast();

  console.log(user);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={Logo} alt="goBarber" />
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={SignInSchema}
            onSubmit={async values => {
              try {
                await SignIn({
                  email: values.email,
                  password: values.password,
                });

                addToast({
                  type: 'sucess',
                  title: 'Logado com sucesso',
                });
              } catch (err) {
                if (err instanceof Yup.ValidationError) {
                  return;
                }
                addToast({
                  type: 'error',
                  title: 'Erro na autenticação',
                  description:
                    'Aconteceu um erro ao fazer login, cheque as credenciais !',
                });
              }
            }}
          >
            {({ values, errors, handleChange, handleBlur }) => (
              <FormFormik>
                <h1> Faça seu logon </h1>

                <Input
                  icon={FiMail}
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Digite seu email"
                  error={errors.email}
                />

                <Input
                  icon={FiLock}
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Digite sua senha"
                  error={errors.password}
                />

                <Button
                  type="submit"
                  disabled={!!values.email || !!values.password}
                >
                  Entrar
                </Button>

                <a href="#"> Esqueci minha senha </a>
              </FormFormik>
            )}
          </Formik>

          <Link to="/signup">
            <FiLogIn /> Criar conta
          </Link>
        </AnimationContainer>
      </Content>

      <Background></Background>
    </Container>
  );
};
