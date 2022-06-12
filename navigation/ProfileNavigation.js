import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../components/Screens/MainPage/Profile';
import Results from '../components/Screens/MainPage/Results';

const Stack = createStackNavigator();

export default function ProfileNavigation() {
    return (
      <Stack.Navigator>
          <Stack.Screen name={'Профиль'} component={Profile}/>
          <Stack.Screen name={'Результат'} component={Results}/>
      </Stack.Navigator>
    );
}
