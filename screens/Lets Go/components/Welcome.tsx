import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import { useRoute } from '@react-navigation/native'
import { GreetingScreenRouteProp } from '../../../types.nav'

export const Welcome = () => {
  const { params } = useRoute<GreetingScreenRouteProp>()
  return (
    <View>
      <Text> добро пожаловать!</Text>
      <TouchableOpacity>
        <Text>Поехали</Text>
      </TouchableOpacity>
    </View>
  )
}
