import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { ButtonText, Container } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  handleSubmit?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  handleSubmit,
  ...rest
}) => {
  return (
    <Container {...rest} onPress={handleSubmit}>
      <ButtonText> {children} </ButtonText>
    </Container>
  );
};
