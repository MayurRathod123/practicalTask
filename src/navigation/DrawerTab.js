import { View, Text } from 'react-native'
import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Screen1 from '../screens/Dashboard';
import Screen2 from '../screens/Attendance';
import HomeScreen from '../screens/HomeScreen';
import CustomDrawerContent from '../components/CustomDrawerContent';
import Dashboard from '../screens/Dashboard';

const Drawer = createDrawerNavigator();

const DrawerTab = () => {
  return (
    <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: true,
          drawerStyle: { width: 250 },
        }}
      >
        <Drawer.Screen name='Home' component={HomeScreen}/>
        <Drawer.Screen name='Dashboard' component={Dashboard}/>
    </Drawer.Navigator>
  )
}

export default DrawerTab