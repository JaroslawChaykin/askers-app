import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainNavigation from './navigation/MainNavigation';
import Authorization from './components/Screens/AuthPage/Authorization';
import SignIn from './components/Screens/AuthPage/SignIn';
import SignUp from './components/Screens/AuthPage/SignUp';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} backgroundColor="#fff"/>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name={'Authorization'} component={Authorization} />
        <Stack.Screen name={'MainNav'} component={MainNavigation} />
        <Stack.Screen name={'SignIn'} component={SignIn} />
        <Stack.Screen name={'SignUp'} component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
