import { AppButton } from '@components/AppButton';
import { AppText } from '@components/AppText';
import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background-color: ${props => props.theme.colors.dark};
`;

export const Content = styled.View`
  flex-grow: 1;
  background-color: ${props => props.theme.colors.ice100};
  align-items: center;
  justify-content: center;
  padding: 24px 24px 40px;
  border-radius: 16px;
`;

export const WelcomeText = styled(AppText)`
  margin-top: 24px;
`;

export const LoginText = styled(AppText)`
  margin: 8px 0;
`;

export const WrapperInput = styled.View`
  width: 100%;
  margin-top: 8px;
`;

export const SignInButton = styled(AppButton)`
  margin-top: 14px;
`;
