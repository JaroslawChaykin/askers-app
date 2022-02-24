import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../components/Screens/MainPage/Profile';
import Results from '../components/Screens/MainPage/Results';

const Stack = createStackNavigator();

export default function ProfileNavigation() {
    return (
      <Stack.Navigator screenOptions={{
          headerShown: false
      }}>
          <Stack.Screen name={'Profile'} component={Profile}/>
          <Stack.Screen name={'Results'} component={Results}/>
      </Stack.Navigator>
    );
}
