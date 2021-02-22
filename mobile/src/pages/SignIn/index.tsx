import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import logoImg from '../../assets/logo.png';
import { Button, Input } from '../../components';
import {
  Container,
  CreateAccountButton,
  CreateAccountButtonText,
  ForgotPassword,
  ForgotPasswordText,
  Title,
} from './styles';

export const SignIn: React.FC = () => {
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
              <Title> Faça seu logon </Title>
            </View>
            <Input name="email" icon="mail" placeholder="email" />
            <Input name="password" icon="lock" placeholder="senha" />

            <Button onPress={() => console.log('clicou')}>Entrar</Button>

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
