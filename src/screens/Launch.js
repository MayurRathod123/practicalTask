import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Launch = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
        }, 2000)
    },[])
  return (
    <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
      <Text style={{fontSize: 23,color:'green'}}>React native Task</Text>
    </View>
  )
}

export default Launch