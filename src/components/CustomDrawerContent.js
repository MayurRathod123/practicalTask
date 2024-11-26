import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      {/* Custom header content */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Hello, User!</Text>
      </View>

      {/* Render default drawer items */}
      <DrawerItemList {...props} />

      {/* Custom footer actions */}
      <TouchableOpacity style={styles.footerButton} onPress={() => alert('Logout pressed')}>
        <Text style={styles.footerButtonText}>Version 3.26.0</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#f7f7f7',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerButton: {
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#ff5757',
    borderRadius: 5,
  },
  footerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CustomDrawerContent;