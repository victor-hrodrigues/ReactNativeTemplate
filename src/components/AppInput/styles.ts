import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 45px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0 16px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.white};

  ${({ isErrored }) =>
    isErrored &&
    css`
      border-color: ${({ theme }) => theme.colors.red300};
    `}

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: ${({ theme }) => theme.colors.blue300};
    `}
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: `${({ theme }) => theme.colors.gray300};`,
})`
  flex: 1;
`;
