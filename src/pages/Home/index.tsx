import addImg from '@assets/share.png';
import { AppKeyboardAvoidingView } from '@components/AppKeyboardAvoidingView';
import { AppText } from '@components/AppText';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@routes/auth.routes';
import { currencyFormatterNumber } from '@utils/currencyFormatter';
import React from 'react';
import {
  Balance,
  BalanceSign,
  BalanceValue,
  BalanceWrapper,
  Button,
  ButtonText,
  ButtonTextBold,
  ButtonWrapper,
  Container,
  Content,
  Image,
  Title,
  Wrapper,
} from './styles';

export const Home = (): JSX.Element => {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <AppKeyboardAvoidingView>
      <Container>
        <Wrapper>
          <Title textColor="black" variant="h1">
            Conta Digital
          </Title>
        </Wrapper>

        <Balance>
          <AppText textColor="black" variant="caption">
            Saldo
          </AppText>
          <BalanceWrapper>
            <BalanceSign textColor="black" variant="h3">
              R$
            </BalanceSign>
            <BalanceValue textColor="black" variant="h3">
              {`${currencyFormatterNumber(57500000)}`}
            </BalanceValue>
          </BalanceWrapper>
        </Balance>

        <Content>
          <Button
          // onPress={() => navigate('new_screen')}
          >
            <Image source={addImg} />
            <ButtonWrapper>
              <ButtonTextBold textColor="black" variant="button">
                Cadastrar dados
              </ButtonTextBold>
              <ButtonText textColor="black" variant="paragraph">
                Cadastre seus dados pessoais
              </ButtonText>
            </ButtonWrapper>
          </Button>
          <Button
          // onPress={() => navigate('new_screen')}
          >
            <Image source={addImg} />
            <ButtonWrapper>
              <ButtonTextBold textColor="black" variant="button">
                Adicionar saldo
              </ButtonTextBold>
              <ButtonText textColor="black" variant="paragraph">
                Adicione saldo em sua conta digital
              </ButtonText>
            </ButtonWrapper>
          </Button>
        </Content>
      </Container>
    </AppKeyboardAvoidingView>
  );
};
