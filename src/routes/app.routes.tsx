import homeOffImage from '@assets/home-off.png';
import homeOnImage from '@assets/home-on.png';
import { Home } from '@pages/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image } from 'react-native';
import { useTheme } from 'styled-components';

const Tab = createBottomTabNavigator();

export type HomeStackParamList = {
  Home: undefined;
};

export type HomeScreenRouteProp = RouteProp<HomeStackParamList, 'Home'>;

const HomeStack = createStackNavigator<HomeStackParamList>();
const HomeRoutes: React.FC = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Home">
    <HomeStack.Screen name="Home" component={TabRoutes} />
  </HomeStack.Navigator>
);

const tabIcons: React.FC<any> = (
  route: RouteProp<ParamListBase, string>,
  focused: boolean
) => {
  let iconName;
  const iconRouteMap = {
    homeOn: homeOnImage,
    homeOff: homeOffImage,
  };

  if (route.name === 'Início') {
    iconName = focused ? iconRouteMap.homeOn : iconRouteMap.homeOff;
  }

  return (
    <Image
      source={iconName}
      style={{ height: 30, width: 30, resizeMode: 'contain' }}
    />
  );
};

const TabRoutes: React.FC = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          height: 64,
          paddingTop: 8,
          paddingBottom: 8,
        },
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: { fontSize: 12 },
        tabBarIcon: ({ focused }) => tabIcons(route, focused),
        tabBarActiveTintColor: theme.colors.dark,
        tabBarInactiveTintColor: theme.colors.gray300,
      })}>
      <Tab.Screen name="Início" component={Home} />
    </Tab.Navigator>
  );
};

export default HomeRoutes;
