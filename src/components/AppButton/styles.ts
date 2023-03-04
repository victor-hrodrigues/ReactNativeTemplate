import styled from 'styled-components/native';
import { css } from 'styled-components';

interface ButtonProps {
  buttonColor: string;
  borderColor?: string;
}

export const Container = styled.Pressable<ButtonProps>`
  width: 100%;
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background-color: ${({ theme, buttonColor }) => theme.colors[buttonColor]};

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme.colors.gray100};
    `}

  ${({ borderColor }) =>
    borderColor &&
    css`
      border: 1px solid ${({ theme }) => theme.colors[borderColor]};
    `}
`;
