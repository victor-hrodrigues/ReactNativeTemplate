import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useTheme } from 'styled-components';
import { BackgroundView } from './styles';

interface Props {
  children: React.ReactElement | any;
}

export const AppKeyboardAvoidingView = ({ children }: Props): JSX.Element => {
  const theme = useTheme();

  if (Platform.OS === 'ios') {
    return (
      <BackgroundView>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={Platform.OS === 'ios' ? 44 : 0}
          style={{
            flex: 1,
            backgroundColor: theme.colors.dark,
          }}>
          {children}
        </KeyboardAvoidingView>
      </BackgroundView>
    );
  }
  return <BackgroundView>{children}</BackgroundView>;
};
