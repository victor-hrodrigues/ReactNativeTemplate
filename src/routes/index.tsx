import React from 'react';
import { SafeAreaView } from 'react-native';
import { useTheme } from 'styled-components';
import { useAuth } from '../hooks/user';
import HomeRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
  const { isValidUser } = useAuth();
  const theme = useTheme();

  return isValidUser() ? (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: theme.colors.dark }} />
      <SafeAreaView
        style={{ flex: 1, backgroundColor: theme.colors.transparent }}>
        <HomeRoutes />
      </SafeAreaView>
    </>
  ) : (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.dark }}>
      <AuthRoutes />
    </SafeAreaView>
  );
};

export default Routes;
