import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from '../components/Screens/Main';
import Profile from '../components/Screens/Profile';

const Drawer = createDrawerNavigator();

export default function DrawerProfile() {
  return (
    <Drawer.Navigator screenOptions={{
      drawerPosition: 'right',
      drawerType: 'slide'
    }}>
      <Drawer.Screen name="Профиль" component={Profile} />
    </Drawer.Navigator>
  );
}