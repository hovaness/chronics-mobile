import { StyleSheet, Text, View, ScrollView } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import React, { useEffect, useState } from 'react'
import { useFonts } from 'expo-font'
import supabase from '../../lib/supabase'
import Category from './components/Category'
import ICategory from '../../models/ICategory'



const HomeScreen = () => {
  const [fontsLoaded,error] = useFonts({
    'Cormorant': require('../../assets/fonts/CormorantUnicase-Bold.ttf'),
    'Jost': require('../../assets/fonts/Jost-Medium.ttf'),
    'Jost-Light': require('../../assets/fonts/Jost-Light.ttf')
  })
  const [loading,setLoading] = useState(false);
  const [categories, setCategories] = useState(null);
  let category : ICategory[];
  
  if(!fontsLoaded && !error){
    return null;
  }

  const getAllCategories = async() => {
    try{
      setLoading(true);
      const {data , error, status} = await supabase.from('CATEGORY').select();
      if(error && status !== 406){
        throw error;
      }
      if(data){
        category=  data;
      }
    }catch(error){
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(()=>{
    getAllCategories();
  },[])



  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Хроники уебики</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories && categories.map(category => {
            <Category desc={category.description} name={category.name} img_code={category.img_code} color={category.color_code}/>
          })}
        </ScrollView>
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