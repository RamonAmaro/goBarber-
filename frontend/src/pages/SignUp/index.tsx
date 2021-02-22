import { Formik } from 'formik';
import React, { useRef } from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import Logo from '../../assets/images/logo.svg';
import { Button, Input } from '../../components';
import { useToast } from '../../hook/toast';
import api from '../../services/apiClient';
import {
  AnimationContainer,
  Background,
  Container,
  Content,
  FormFormik,
} from './styles';

interface ISignUpFomrData {
  name: string;
  email: string;
  password: string;
}

const SignUpSchema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatorio'),
  email: Yup.string()
    .email('Digite um email válido')
    .required('Email obrigatorio'),
  password: Yup.string()
    .required('Senha Obrigatoria')
    .min(6, 'Mínimo 6 caracteres'),
});

export const SignUp: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const history = useHistory();

  const { addToast } = useToast();

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={Logo} alt="goBarber" />

          <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={SignUpSchema}
            onSubmit={async (values: ISignUpFomrData) => {
              try {
                await api.post('/users', values);

                history.push('/');

                addToast({
                  title: 'Cadastro Realizado',
                  type: 'sucess',
                  description: 'Já pode realizar logon na plataforma.',
                });
              } catch (err) {
                addToast({
                  type: 'error',
                  title: 'Erro ao realizar Cadastro',
                  description: 'Confira suas credenciais ou tente mais tarde',
                });
              }
            }}
          >
            {({ values, errors, handleChange, handleBlur }) => (
              <FormFormik ref={formRef}>
                <h1> Faça seu logon </h1>

                <Input
                  icon={FiUser}
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder="Digite seu nome"
                  error={errors.name}
                />

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
                  disabled={
                    !!values.email || !!values.email || !!values.password
                  }
                >
                  Cadastrar
                </Button>
              </FormFormik>
            )}
          </Formik>

          <Link to="/">
            <FiArrowLeft /> Voltar para logon
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
