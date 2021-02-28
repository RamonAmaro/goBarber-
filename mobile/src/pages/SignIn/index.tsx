import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import React, { useRef } from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import * as Yup from 'yup';
import logoImg from '../../assets/logo.png';
import { Button } from '../../components';
import Input from '../../components/Input';
import { useAuth } from '../../hooks/auth';
import {
  Container,
  CreateAccountButton,
  CreateAccountButtonText,
  ForgotPassword,
  ForgotPasswordText,
  Title,
} from './styles';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email('Email inválido'),
  password: Yup.string()
    .required('Senha obrigatorio')
    .min(4, 'Minimo 4 caracteres'),
});

export const SignIn: React.FC = () => {
  const passwordRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  const { SignIn, user } = useAuth();

  console.log(user);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS == 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <Image source={logoImg} />

            <View>
              <Title> Faça seu logon </Title>
            </View>

            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={async values => {
                try {
                  Alert.alert(JSON.stringify(values));
                  await SignIn({
                    email: values.email,
                    password: values.password,
                  });
                } catch {
                  Alert.alert(
                    'Erro na atuenticação',
                    'Ocorreu um erro ao fazer login',
                  );
                }
              }}
              validationSchema={validationSchema}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <>
                  <Input
                    error={errors.email}
                    autoCorrect={false}
                    autoCapitalize="none"
                    name="email"
                    icon="mail"
                    placeholder="Email"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address"
                    returnKeyType="next"
                    onSubmitEditing={() => passwordRef.current?.focus()}
                  />

                  <Input
                    error={errors.password}
                    ref={passwordRef}
                    name="password"
                    icon="lock"
                    placeholder="Senha"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry
                    returnKeyType="send"
                    onSubmitEditing={handleSubmit}
                  />

                  <Button handleSubmit={handleSubmit}>Entrar</Button>
                </>
              )}
            </Formik>

            <ForgotPassword
              onPress={() => {
                console.log('a');
              }}
            >
              <ForgotPasswordText> Esqueci minha senha </ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccountButtonText> Criar uma Conta </CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};
