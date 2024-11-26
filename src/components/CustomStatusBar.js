// components/CustomStatusBar.tsx
import React from 'react';
import { StatusBar, View, StyleSheet, Platform } from 'react-native';

// interface CustomStatusBarProps {
//   backgroundColor: string;
//   barStyle?: 'default' | 'light-content' | 'dark-content';
// }

const CustomStatusBar = ({
  backgroundColor,
  barStyle = 'light-content',
}) => {
  return (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <StatusBar
        translucent
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    height: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default CustomStatusBar;
