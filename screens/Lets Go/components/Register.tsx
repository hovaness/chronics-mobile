import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import { useNavigation, useRoute } from '@react-navigation/native'
import { GreetingScreenNavigationProp } from '../../../types.nav'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font/build/FontHooks'
import { useContextForLog } from '../../../context/contextForLog'

export const Register = () => {
  const [fontsLoaded, error] = useFonts({
    Cormorant: require('../../../assets/fonts/CormorantUnicase-Bold.ttf'),
    Jost: require('../../../assets/fonts/Jost-Light.ttf'),
    'Jost-Light': require('../../../assets/fonts/Jost-Medium.ttf'),
  })
  const { isLog, setIsLog } = useContextForLog()

  function addInContextAndNavigate() {
    setIsLog((prev) => !prev)
    console.log(isLog)
    navigation.navigate('Root', { screen: 'Home' })
  }

  const navigation = useNavigation<GreetingScreenNavigationProp>()
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.tittle}>Регестрируем в БЕСТ ХАРД СИТИ!</Text>
      </View>
      <View style={styles.Image}>
        <Image
          style={styles.Image}
          source={require('../../../assets/public/image 44.png')}
        />
      </View>
      <View style={styles.describe}>
        <Text style={styles.textDescribe}>Войти через гугл</Text>
      </View>
      <TouchableOpacity onPress={() => addInContextAndNavigate()}>
        <View style={styles.Button}>
          <Text style={styles.buttonText}>Войти!</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    rowGap: 25,
    marginTop: 50,
    backgroundColor: '#E9E2B6',
    flex: 1,
  },
  textContainer: {
    marginTop: 50,
    width: 290,
  },
  Image: {
    height: 300,
    width: 200,
  },
  Button: {
    marginTop: 60,
    borderRadius: 14,
    width: 150,
    height: 70,
    backgroundColor: '#FF8800',
    padding: 12,
  },
  describe: {
    width: 300,
  },
  buttonText: {
    paddingTop: 1,
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Jost-Light',
  },
  textDescribe: {
    fontSize: 25,
    fontFamily: 'Cormorant',
    textAlign: 'center',
    lineHeight: 32,
  },
  tittle: {
    fontFamily: 'Cormorant',
    fontSize: 33,
    textAlign: 'center',
  },
})
