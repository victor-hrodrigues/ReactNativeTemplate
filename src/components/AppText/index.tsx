import React from 'react';
import { Container } from './styles';

export interface AppTextProps {
  textColor: string;
  variant: string;
  children: string | Element;
  uppercase?: boolean;
}

export const AppText = ({
  textColor,
  variant,
  uppercase,
  children,
  ...rest
}: AppTextProps): JSX.Element => (
  <Container
    textColor={textColor}
    uppercase={uppercase}
    variant={variant}
    {...rest}>
    {children}
  </Container>
);
