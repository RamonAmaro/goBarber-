import { Formik } from 'formik';
import React from 'react';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';
import * as Yup from 'yup';
import Logo from '../../assets/images/logo.svg';
import { Button, Input } from '../../components';
import { Background, Container, Content, FormFormik } from './styles';

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Digite um email válido')
    .required('Email obrigatorio'),
  password: Yup.string()
    .required('Senha Obrigatoria')
    .min(6, 'Mínimo 6 caracteres'),
});

export const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="goBarber" />
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={SignInSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ values, errors, handleChange, handleBlur, isSubmitting }) => (
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

              <Button type="submit" disabled={isSubmitting}>
                Entrar
              </Button>

              <a href="#"> Esqueci minha senha </a>
            </FormFormik>
          )}
        </Formik>

        <a href="#">
          <FiLogIn /> Criar conta
        </a>
      </Content>

      <Background></Background>
    </Container>
  );
};
