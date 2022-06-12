import React, { useState } from 'react';
import { StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainNavigation from './navigation/MainNavigation';
import Authorization from './components/Screens/AuthPage/Authorization';
import SignIn from './components/Screens/AuthPage/SignIn';
import SignUp from './components/Screens/AuthPage/SignUp';
import UserContext, { AuthProvider, useAuth } from './contexts/UserContext';
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
