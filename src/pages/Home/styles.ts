import { AppText } from '@components/AppText';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.white};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const Wrapper = styled.View`
  padding: 24px 24px 0;
  align-items: center;
`;

export const Title = styled(AppText)`
  margin-left: 16px;
`;

export const Balance = styled.View`
  background-color: ${({ theme }) => theme.colors.ice300};

  flex-direction: row;

  border-radius: 8px;
  margin: 16px 24px 0 24px;
  padding: 8px;
`;

export const BalanceSign = styled(AppText)``;

export const BalanceWrapper = styled.View`
  width: 85%;
  padding: 0 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BalanceValue = styled(AppText)`
  margin-right: 16px;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.ice300};

  margin-top: 24px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const Image = styled.Image`
  width: 32px;
  height: 32px;
  align-self: flex-start;
  resizemode: contain;
`;

export const Button = styled.Pressable`
  background-color: ${({ theme }) => theme.colors.white};

  padding: 8px;
  border-radius: 8px;
  margin-top: 12px;
  margin-left: 24px;
  margin-right: 24px;

  flex-direction: row;
`;

export const ButtonWrapper = styled.View`
  margin-left: 8px;
  flex-shrink: 1;
`;

export const ButtonTextBold = styled(AppText)``;

export const ButtonText = styled(AppText)``;
