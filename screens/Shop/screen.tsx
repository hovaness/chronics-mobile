import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect, useState } from 'react'
import { Post } from './components/Post'
import { Iproduct } from '../../models/IProduct'
import supabase from '../../lib/supabase'

const ShopScreen = () => {
  const [product, setProduct] = useState<Iproduct[]>([])

  async function getProducts() {
    try {
      const { data } = await supabase.from('PRODUCTS').select()
      if (data) {
        setProduct(data)
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            alignItems: 'center',

            height: 50,
            padding: 15,
            marginBottom: 20,
            borderRadius: 5,
            display: 'flex',
          }}>
          <Text
            style={{
              maxWidth: 200,
              fontSize: 17,
              fontWeight: '700',
            }}>
            Товары франшизы
          </Text>
        </View>
        {product.map((product) => (
          <Post product={product} key={product.name} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default ShopScreen

const styles = StyleSheet.create({})
