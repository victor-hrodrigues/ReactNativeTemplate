import styled, { css } from 'styled-components/native';
import TextInputMask from 'react-native-text-input-mask';
import { AppText } from '@components/AppText';

interface ContainerProps {
  error: string;
}

export const HorizontalContainer = styled.View<ContainerProps>`
  flex-direction: row;
  justify-content: space-between;
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

export const Container = styled.View<ContainerProps>`
  flex: 1;
`;

export const Label = styled(AppText)``;

export const Input = styled(TextInputMask)`
  margin: 0;
  padding: 0;
  height: 60%;
`;

export const HideShowPressable = styled.Pressable`
  align-self: center;
  margin: 0px 10px 0px 0px;
`;

export const Image = styled.Image`
  width: 30px;
  height: 30px;
  resizemode: contain;
`;
