import { StyleSheet, Text, View } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import React from 'react'
import { useFonts } from 'expo-font'
import Category from './components/Category'



const HomeScreen = () => {
  const [fontsLoaded,error] = useFonts({
   'Cormorant': require('../../assets/fonts/CormorantUnicase-Bold.ttf'),
   'Jost-Light': require('../../assets/fonts/Jost-Light.ttf'),
   'Jost':require('../../assets/fonts/Jost-Medium.ttf')
  })

  if(!fontsLoaded && !error){
    return null;
  }

  return (
    <SafeAreaView style = {styles.container}>
      <Text style={styles.title}>Хроники</Text>
      <Category name='Персонажи' img_code='' desc='Выучите всех персонажей из книг' color='#4293D4'/>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    marginTop:20,
    marginHorizontal: 20,
    flex: 1,
  },
  title: {
    fontFamily: 'Cormorant',
    fontSize: 32,
    color: '#333',
    fontWeight: "700",
    textTransform:'uppercase',
  }
})