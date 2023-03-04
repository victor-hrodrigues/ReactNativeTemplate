import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { TextInputProps } from 'react-native';
import { AppText } from '../AppText';
import { Container, TextInput } from './styles';

interface AppInputProps extends TextInputProps {
  labelColor: string;
  label: string;
  hasError: boolean;
}

const AppInputBase: ForwardRefRenderFunction<TextInputProps, AppInputProps> = (
  { labelColor, label, style, hasError, ...rest }: AppInputProps,
  ref
): JSX.Element => (
  <Container isErrored={hasError} style={style}>
    <AppText textColor={labelColor} variant="caption">
      {label}
    </AppText>
    <TextInput ref={ref} variant="input" {...rest} />
  </Container>
);

export const AppInput = forwardRef(AppInputBase);
