import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Authorization from '../components/Screens/AuthPage/Authorization';
import SignIn from '../components/Screens/AuthPage/SignIn';
import SignUp from '../components/Screens/AuthPage/SignUp';
import MainNavigation from './MainNavigation';
import { useAuth } from '../contexts/UserContext';
import Quiz from '../components/Screens/MainPage/Quiz';

const Stack = createStackNavigator();

const AuthNavigation = () => {
    const {user} = useAuth()
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
          {
              !user ?
                <>
                    <Stack.Screen name={'Authorization'} component={Authorization}/>
                    <Stack.Screen name={'SignIn'} component={SignIn}/>
                    <Stack.Screen name={'SignUp'} component={SignUp}/>
                </>
                :
                <>
                  <Stack.Screen name={'MainNav'} component={MainNavigation}/>
                  <Stack.Screen name={'Quiz'} component={Quiz}/>
                </>
          }
      </Stack.Navigator>
    );
};

export default AuthNavigation;