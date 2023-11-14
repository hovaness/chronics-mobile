import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { Iproduct } from '../../../models/IProduct'
import { styles } from './ShopStyle'
interface ProductProps {
  product: Iproduct
}

export const Post = ({ product }: ProductProps) => {
  return (
    <View style={styles.View}>
      <Image
        style={styles.image}
        source={{
          uri: product.img_code,
        }}></Image>
      <View style={styles.Details}>
        <Text numberOfLines={4} style={styles.Tittle}>
          {product.name}
        </Text>
        <Text numberOfLines={5} style={styles.description}>
          {product.description}
        </Text>
        <TouchableOpacity
          onPress={() => Linking.openURL(product.url)}
          style={styles.Button}>
          <Text style={styles.ButtonText}>Подробнее..</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
