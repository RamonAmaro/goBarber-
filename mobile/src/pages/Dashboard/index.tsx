import React from 'react';
import { Button, View } from 'react-native';
import { useAuth } from '../../hooks/auth';

export const Dashboard: React.FC = () => {
  const { SignOut } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button title="Sair do App" onPress={SignOut} />
    </View>
  );
};
