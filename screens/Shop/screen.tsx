import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { Post } from '../components/Post'
import { products } from '../data/products'

const ShopScreen = () => {
  const currentProduct = products
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Shop screen</Text>
      <ScrollView style={{ flex: 1 }}>
        {currentProduct.map((product) => (
          <Post product={product} key={product.id} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default ShopScreen

const styles = StyleSheet.create({})
