import React from 'react';
import { PressableProps } from 'react-native';
import { AppText } from '../AppText';
import { Container } from './styles';

interface AppButtonProps extends PressableProps {
  buttonColor: string;
  textColor: string;
  uppercase?: boolean;
  borderColor?: string;
  children: string;
}

export const AppButton = ({
  buttonColor,
  textColor,
  borderColor,
  uppercase,
  children,
  style,
  disabled,
  ...rest
}: AppButtonProps): JSX.Element => (
  <Container
    buttonColor={buttonColor}
    style={style}
    disabled={disabled}
    borderColor={borderColor}
    {...rest}>
    <AppText
      textColor={disabled ? 'gray300' : textColor}
      uppercase={uppercase}
      variant="button">
      {children}
    </AppText>
  </Container>
);
