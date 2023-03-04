import styled, { css } from 'styled-components/native';
import TextInputMask from 'react-native-text-input-mask';
import { AppText } from '@components/AppText';

interface ContainerProps {
  error: string;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  background-color: #ffffff;
  border-radius: 16px;
  height: 45px;
  padding-top: 4px;
  padding-left: 16px;

  ${({ error }) =>
    error &&
    css`
      border-width: 1px;
      border-color: ${({ theme }) => theme.colors.red300};
    `}
`;

export const Label = styled(AppText)``;

export const Input = styled(TextInputMask)`
  margin: 0;
  padding: 0;
  flex: 1;
`;
