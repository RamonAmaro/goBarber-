import React from 'react';
import { useTransition } from 'react-spring';
import { IToastMessage } from '../../hook/toast';
import { Container } from './styles';
import { Toast } from './Toast';

interface IToastMessageProps {
  messages: IToastMessage[];
}

export const ToastMessage: React.FC<IToastMessageProps> = ({ messages }) => {
  const messagesWidthTransition = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: '0' },
      enter: { right: '0%', opacity: '1' },
      leave: { right: '-120%', opacity: '0' },
    },
  );
  return (
    <Container>
      {messagesWidthTransition.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Container>
  );
};
