import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import { useNavigation, useRoute } from '@react-navigation/native'
import { GreetingScreenNavigationProp } from '../../../types.nav'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font/build/FontHooks'
import { useContextForLog } from '../../../context/contextForLog'
import Auth from '../../../components/Auth'


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
        <Text style={styles.tittle}>Регистрируем в БЕСТ ХАРД СИТИ!</Text>
      </View>
      <View style={styles.Image}>
        <Image
          style={styles.Image}
          source={require('../../../assets/public/scan.png')}
        />
      </View>
      <View style={styles.describe}>
        <Text style={styles.textDescribe}>Войти через гугл</Text>
      </View>
      <Auth/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    rowGap: 25,
    marginTop: 50,
    backgroundColor: '#fff',
    flex: 1,
  },
  textContainer: {
    marginTop: 50,
    width: 290,
  },
  Image: {
    height: 232,
    width: 230,
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
    fontSize: 28,
    fontFamily: 'Cormorant',
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
