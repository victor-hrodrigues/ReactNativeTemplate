import { SignIn } from 'pages/SignIn';
import { RouteProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

export type RootStackParamList = {
  SignIn: undefined;
};

export type SignInScreenRouteProp = RouteProp<RootStackParamList, 'SignIn'>;

const Auth = createStackNavigator<RootStackParamList>();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
    initialRouteName="SignIn">
    <Auth.Screen name="SignIn" component={SignIn} />
  </Auth.Navigator>
);

export default AuthRoutes;
