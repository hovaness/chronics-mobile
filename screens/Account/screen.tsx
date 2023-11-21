import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useFonts } from 'expo-font'

import { useNavigation } from '@react-navigation/native'
import {
  CategoryScreenNavigationProp,
  GreetingScreenNavigationProp,
  ProfileScreenNavigationProp,
} from '../../types.nav'
import { useStatisticContext } from '../../context/context'

const Category = () => {
  const { productsInCart } = useStatisticContext()
  const navigation = useNavigation<GreetingScreenNavigationProp>()
  return (
    <View>
      <TouchableOpacity activeOpacity={0.5}>
        <View
          style={{
            backgroundColor: '#4293D4',
            width: 220,
            height: 140,
            paddingHorizontal: 10,
            paddingVertical: 20,
            borderRadius: 15,
            marginRight: 10,
          }}>
          <View style={styles.container}>
            <View style={styles.textView}>
              <Text style={styles.title}>Изучено слов</Text>
              <Text numberOfLines={4} style={styles.desc}>
                {productsInCart}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Greeting', { screen: 'Welcome' })
        }}>
        <Text>Регистрация</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  textView: {
    flexDirection: 'column',
    gap: 10,
    alignItems: 'flex-start',
  },
  title: {
    fontFamily: 'Cormorant',
    color: '#fff',
    fontSize: 16,
  },
  desc: {
    fontFamily: 'Jost-Light',
    color: '#f0f0f0',
    fontSize: 11,
    overflow: 'hidden',
  },
})
