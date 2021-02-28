import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Dashboard } from '../pages';

const App = createStackNavigator();

export const AppRoutes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#312e38' },
      }}
    >
      <App.Screen name="Dashboard" component={Dashboard} />
    </App.Navigator>
  );
};
