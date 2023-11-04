import { Pressable, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import React from 'react'

const AccountScreen = () => {


  return (
    <View>
        <TouchableOpacity onPress={()=>console.log('123')}>
          <Text>DFKS</Text>
        </TouchableOpacity>
    </View>
  )
}

export default AccountScreen;

const styles = StyleSheet.create({})