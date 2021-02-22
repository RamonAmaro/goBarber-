import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, View } from 'react-native';
import 'react-native-gesture-handler';
import { AuthRoutes } from './routes';

export const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <View style={{ flex: 1, backgroundColor: '#312e38' }}>
        <AuthRoutes />
      </View>
    </NavigationContainer>
  );
};

export default App;
