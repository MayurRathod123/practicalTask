import { View, Text } from 'react-native'
import React from 'react'
// import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from '../screens/Dashboard';
import DrawerTab from './DrawerTab';
import MapScreen from '../screens/MapScreen';
import Launch from '../screens/Launch';

// const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Launch" component={Launch} />
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation