import React from 'react';
import { StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './navigation/AuthNavigation';
import  { AuthProvider} from './contexts/UserContext';
import { QuizzesProvider } from './contexts/QuizzesContext';

export default function App() {
    return (
      <AuthProvider>
          <QuizzesProvider>
              <NavigationContainer>
                  <StatusBar barStyle={'dark-content'} backgroundColor="#fff"/>
                  <AuthNavigation/>
              </NavigationContainer>
          </QuizzesProvider>
      </AuthProvider>
    );
};
