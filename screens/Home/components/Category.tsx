
import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

type Props = {
  name: string,
  color: string,
  desc: string,
  img_code:string,
}

const Category = (props: Props) => {
  return (
    <View>
      <Image source={{ uri:props.img_code }}/>
    </View>
  )
}

export default Category;

const styles = StyleSheet.create({
  
})