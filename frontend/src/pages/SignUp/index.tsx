import { Formik } from 'formik';
import React, { useRef } from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import * as Yup from 'yup';
import Logo from '../../assets/images/logo.svg';
import { Button, Input } from '../../components';
import { Background, Container, Content, FormFormik } from './styles';

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

  return (
    <Container>
      <Background />
      <Content>
        <img src={Logo} alt="goBarber" />

        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={SignUpSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,

            handleChange,
            handleBlur,
            isSubmitting,
          }) => (
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

              <Button type="submit" disabled={isSubmitting}>
                Cadastrar
              </Button>
            </FormFormik>
          )}
        </Formik>

        <a href="#">
          <FiArrowLeft /> Voltar para logon
        </a>
      </Content>
    </Container>
  );
};
