import { Pressable, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import React, { useEffect, useState } from 'react'
import supabase from '../../lib/supabase'

const AccountScreen = () => {
  const [name, setName] = useState(null)
  const [loading, setLoading] = useState(true)


  async function getName() {
    try{
      setLoading(true);
      const {data, error, status} = await supabase.from('USER').select();
      if(error && status !== 406){
        throw error;
      }
      if(data){
        console.log(data);
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
    getName();
  },[])

  return (
    <SafeAreaView>
        <Text>Если вам в консоль выводиться инфа значит подключилисб</Text>
    </SafeAreaView>
  )
}

export default AccountScreen;

const styles = StyleSheet.create({})