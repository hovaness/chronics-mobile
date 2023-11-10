
import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

type Props = {
  name: string,
  color: string,
  desc: string,
  img_code:string,
}

const Category = (props: Props) => {
  const [fontsLoaded,error] = useFonts({
    'Cormorant': require('../../../assets/fonts/CormorantUnicase-Bold.ttf'),
    'Jost-Light': require('../../../assets/fonts/Jost-Light.ttf')
  })

  if(!fontsLoaded && !error){
    return null;
  }
  
  return (
    <View 
    style={{backgroundColor: props.color, width:220, height:140,paddingHorizontal:10, paddingVertical:20, borderRadius:15}}
    >
      <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.title}>{props.name}</Text>
          <Text style={styles.desc}>{props.desc}</Text>
        </View>
      </View>
    </View>
  )
}

export default Category;

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    gap:10,
    alignItems:'center',
  },
  textView: {
    flexDirection:'column',
    gap:10,
    alignItems:'flex-start',
  },
  title:{
    fontFamily:'Cormorant',
    color:'fff',
    fontSize:16,
  },
  desc:{
    fontFamily:'Jost-Light',
    color:'f0f0f0',
    fontSize:11,
  },
})