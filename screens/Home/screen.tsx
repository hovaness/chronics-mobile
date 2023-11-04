import { StyleSheet, Text, View } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import React from 'react'
import { useFonts } from 'expo-font'



const HomeScreen = () => {
  const [fontsLoaded,error] = useFonts({
    'Cormorant': require('../../assets/fonts/CormorantUnicase-Bold.ttf'),
    'Cormorant-Light': require('../../assets/fonts/CormorantUnicase-SemiBold.ttf')
  })


  if(!fontsLoaded && !error){
    return null;
  }

  return (
    <SafeAreaView>
        <Text style= {{fontFamily:"Cormorant-Light", fontSize: 50}}>Хроники уебики</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

})