import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import { useNavigation, useRoute } from '@react-navigation/native'
import { GreetingScreenNavigationProp } from '../../../types.nav';
import { SafeAreaView } from 'react-native-safe-area-context';


export const Welcome = () => {
  const navigation = useNavigation<GreetingScreenNavigationProp>();
  return (
    <SafeAreaView>
      <Text> добро пожаловать!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Greeting', {screen:"Information"})}>
        <Text>Поехали</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
