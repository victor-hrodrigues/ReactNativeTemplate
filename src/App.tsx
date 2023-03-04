import { AuthProvider } from '@hooks/user';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Host } from 'react-native-portalize';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import light from './styles/themes/light';

const App: () => JSX.Element = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor={light.colors.dark} />
    <ThemeProvider theme={light}>
      <PaperProvider>
        <Host>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </Host>
      </PaperProvider>
    </ThemeProvider>
  </NavigationContainer>
);

export default App;
