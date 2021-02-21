import React from 'react';
import { IToastMessage } from '../../hook/toast';
import { Container } from './styles';
import { Toast } from './Toast';

interface IToastMessageProps {
  messages: IToastMessage[];
}

export const ToastMessage: React.FC<IToastMessageProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};
