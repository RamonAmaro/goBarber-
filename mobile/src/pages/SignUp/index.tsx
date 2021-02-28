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
import api from '../../services/apiClient';
import { BackToSignIn, BackToSignInText, Container, Title } from './styles';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Nome Obrigatorio'),
  email: Yup.string().required().email('Email inválido'),
  password: Yup.string()
    .required('Senha obrigatorio')
    .min(4, 'Minimo 4 caracteres'),
});

export const SignUp: React.FC = () => {
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

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
              <Title>Crie sua conta </Title>
            </View>
            <Formik
              initialValues={{ name: '', email: '', password: '' }}
              onSubmit={async values => {
                try {
                  await api.post('/users', values);
                  Alert.alert('Cadastro realizado com Sucesso');

                  navigation.navigate('SignIn');
                } catch (err) {
                  Alert.alert(
                    'Houve um erro ao cadastrar',
                    JSON.stringify(err),
                  );
                }
              }}
              validationSchema={validationSchema}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <>
                  <Input
                    error={errors.name}
                    autoCorrect={true}
                    autoCapitalize="words"
                    name="name"
                    icon="user"
                    placeholder="Nome"
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    returnKeyType="next"
                    onSubmitEditing={() => emailInputRef.current?.focus()}
                  />

                  <Input
                    ref={emailInputRef}
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
                    onSubmitEditing={() => passwordInputRef.current?.focus()}
                  />

                  <Input
                    ref={passwordInputRef}
                    error={errors.password}
                    name="password"
                    icon="lock"
                    placeholder="Senha"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    textContentType="newPassword"
                    secureTextEntry
                    returnKeyType="send"
                    onSubmitEditing={handleSubmit}
                  />

                  <Button handleSubmit={handleSubmit}>Cadastrar</Button>
                </>
              )}
            </Formik>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSignIn onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#fff" />
        <BackToSignInText> Voltar para logon </BackToSignInText>
      </BackToSignIn>
    </>
  );
};
