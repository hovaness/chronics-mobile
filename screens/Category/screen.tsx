import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CategoryScreenRouteProp } from '../../types.nav'
import { useRoute } from '@react-navigation/native'




const CategoryScreen = () => {
  const {params} = useRoute<CategoryScreenRouteProp>();
  return (
    <View style={{backgroundColor:params.color_code,flex:1}}>
      <Text style={{color:'#fff', textAlign:'center',fontSize:32 }}>{params.name}</Text>
      <Text style={{color:'#fff', textAlign:'center',fontSize:16 }}>{params.description}</Text>
    </View>
  )
}

export default CategoryScreen

const styles = StyleSheet.create({})