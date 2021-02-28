import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SignIn, SignUp } from '../pages';

const Auth = createStackNavigator();

export const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#312e38' },
      }}
    >
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  );
};
