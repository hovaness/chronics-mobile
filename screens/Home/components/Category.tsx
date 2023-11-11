
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import ICategory from '../../../models/ICategory'
import { useNavigation } from '@react-navigation/native'
import { CategoryScreenNavigationProp } from '../../../types.nav'




const Category = (props: ICategory) => {
  const [fontsLoaded,error] = useFonts({
    'Cormorant': require('../../../assets/fonts/CormorantUnicase-Bold.ttf'),
    'Jost-Light': require('../../../assets/fonts/Jost-Light.ttf')
  });
  const navigation = useNavigation<CategoryScreenNavigationProp>()

  if(!fontsLoaded && !error){
    return null;
  }
  
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={()=>{
      navigation.navigate('Category',props)
    }}>
      <View 
      style={{backgroundColor: props.color_code, width:220, height:140,paddingHorizontal:10, paddingVertical:20, borderRadius:15, marginRight:10}}
      >
        <View style={styles.container}>
          <View style={styles.textView}>
            <Text style={styles.title}>{props.name}</Text>
            <Text numberOfLines={4} style={styles.desc}>{props.description}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
    color:'#fff',
    fontSize:16,
  },
  desc:{
    fontFamily:'Jost-Light',
    color:'#f0f0f0',
    fontSize:11,
    overflow:'hidden',
  },
})