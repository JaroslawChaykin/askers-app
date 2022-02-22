import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import CreateAsk from '../components/Screens/MainPage/CreateAsk';
import Main from '../components/Screens/MainPage/Main';
import Search from '../components/Screens/MainPage/Search';
import Profile from '../components/Screens/MainPage/Profile';
import themes from '../constants/_theme.constants';


const Tab = createBottomTabNavigator();

Tab.navigationOptions = {
    header: null,
};

const tabOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
};
const mainTabOptions = Object.assign({
    tabBarIcon: () => (
      <View style={styles.iconAround}>
          <AntDesign name="home" size={26} color="white"/>
      </View>),
}, tabOptions);

const searchTabOptions = Object.assign({
    tabBarIcon: () => (
      <View style={styles.iconAround}>
          <AntDesign name="search1" size={26} color="white"/>
      </View>
    ),
}, tabOptions);

const userTabOptions = Object.assign({
    tabBarIcon: () => (
      <View style={styles.iconAround}>
          <AntDesign name="user" size={26} color="white"/>
      </View>
    )
}, tabOptions);

const tabNavigatorOptions = {
    headerShown: false,
    tabBarStyle: {
        height: 76,
        elevation: 0,
        shadowOpacity: 0,
        borderTopWidth: 2,
        borderTopColor: themes.palette.secondaryBlue,
        paddingHorizontal: 25,
    },
};

export default function MainNavigation() {
    return (
      <Tab.Navigator screenOptions={tabNavigatorOptions}>
          <Tab.Screen name={'CreateAsk'}
                      component={CreateAsk}
                      options={({navigation}) => ({
                          tabBarShowLabel: false,
                          tabBarHideOnKeyboard: true,
                          tabBarButton: () => (
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateAsk')}>
                                <View style={styles.innerButton}>
                                    <AntDesign name="plus" size={32} color="white"/>
                                    <Text style={styles.buttonText}>Создать опрос</Text>
                                </View>
                            </TouchableOpacity>
                          ),
                      })}/>
          <Tab.Screen name={'Main'} component={Main} options={mainTabOptions}/>
          <Tab.Screen name={'Search'} component={Search} options={searchTabOptions}/>
          <Tab.Screen name={'Profile'} component={Profile} options={userTabOptions}/>
      </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerButton: {
        paddingVertical: 14,
        paddingHorizontal: 15,
        borderRadius: 10,
        backgroundColor: themes.palette.primaryBlue,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '700',
        color: '#fff',
        marginLeft: 10
    },
    iconAround: {
        backgroundColor: themes.palette.primaryBlue,
        padding: 9,
        borderRadius: 120,
        marginRight: -25
    }
});
