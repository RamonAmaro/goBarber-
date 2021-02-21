import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';
import { IToastMessage, useToast } from '../../../hook/toast';
import { Container } from './styles';

interface IToastPropsMessage {
  message: IToastMessage;
  style: any;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  sucess: <FiCheckCircle size={24} />,
};

export const Toast: React.FC<IToastPropsMessage> = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id]);

  return (
    <Container
      style={style}
      type={message.type}
      hasDescription={!!message.description}
      key={message.id}
    >
      {icons[message.type || 'info']}

      <div>
        <strong>{message.title} </strong>

        {message.description && <p> {message.description} </p>}
      </div>
      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};
