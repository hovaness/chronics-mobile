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
import { Iproduct } from '../data/moduls'
interface ProductProps {
  product: Iproduct
}

export const Post = ({ product }: ProductProps) => {
  const [fontsLoaded, error] = useFonts({
    Cormorant: require('../../assets/fonts/CormorantUnicase-Bold.ttf'),
    'Cormorant-Light': require('../../assets/fonts/CormorantUnicase-SemiBold.ttf'),
  })

  if (!fontsLoaded && !error) {
    return null
  }
  return (
    <View style={styles.View}>
      <Image
        style={styles.image}
        source={{
          uri: product.imageUrl,
        }}></Image>
      <View style={styles.Details}>
        <Text numberOfLines={4} style={styles.Tittle}>
          {product.title}
        </Text>
        <Text numberOfLines={5} style={styles.description}>
          {product.text}
        </Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://robi.team/#products')}
          style={styles.Button}>
          <Text style={styles.ButtonText}>Подробнее..</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  image: {
    width: 130,
    height: 200,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 12,
    marginRight: 12,
  },
  description: {
    overflow: 'hidden',

    maxHeight: 170,
    maxWidth: 220,
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.4)',
    marginTop: 5,
  },
  View: {
    marginBottom: 20,
    backgroundColor: '#ff902b',
    marginRight: 10,
    marginReft: 10,
    borderRadius: 14,
    flexDirection: 'row',
    position: 'relative',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomStyle: 'solid',
  },
  Tittle: {
    maxWidth: 200,
    fontSize: 17,
    fontWeight: '700',
    fontFamily: 'Cormorant-Light',
  },
  ButtonText: {
    fontSize: 12,
    textAlign: 'center',
  },
  Button: {
    backgroundColor: '#313131',
    width: 120,
    height: 40,
    padding: 12,
    borderRadius: 10,
    marginLeft: 75,
    marginTop: 15,
  },
  Details: {
    marginLeft: 5,
  },
})
