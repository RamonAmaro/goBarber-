import React from 'react';
import * as S from './styles';

interface ITooltipProps {
  title?: string;
  className?: string;
}

export const Tooltip: React.FC<ITooltipProps> = ({
  title,
  className,
  children,
}) => {
  return (
    <S.Container className={className}>
      {children}
      <span>{title}</span>
    </S.Container>
  );
};
