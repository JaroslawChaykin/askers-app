import React from 'react';
import { StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import  { AuthProvider} from './contexts/UserContext';
import AuthNavigation from './navigation/AuthNavigation';

export default function App() {
    return (
      <AuthProvider>
          <NavigationContainer>
              <StatusBar barStyle={'dark-content'} backgroundColor="#fff"/>
              <AuthNavigation/>
          </NavigationContainer>
      </AuthProvider>
    );
};
