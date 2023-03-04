import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { Container, Input, Label } from './styles';

interface Props extends TextInputProps {
  control: Control<any>;
  name: string;
  label: string;
  error?: string;
  mask?: string;
}

export const AppInputFormMask = ({
  control,
  name,
  label,
  error,
  mask,
  ...rest
}: Props): JSX.Element => (
  <Controller
    control={control}
    name={name}
    render={({ field: { onChange, value } }) => (
      <Container error={error}>
        <Label textColor={error ? 'red300' : 'blue300'} variant="caption">
          {error || label}
        </Label>
        <Input onChangeText={onChange} value={value} mask={mask} {...rest} />
      </Container>
    )}
  />
);
