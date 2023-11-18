import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

import React from 'react'

import { IWords } from '../../../models/IWords'
import { useNavigation } from '@react-navigation/native'
import { WordScreenNavigatorProp } from '../../../types.nav'
import { useStatisticContext } from '../../../context/context'
interface WordProps {
  word: IWords
}
let count = false
export const Word = ({ word }: WordProps) => {
  const { productsInCart, setProductsInCart } = useStatisticContext()
  const navigation = useNavigation<WordScreenNavigatorProp>()

  function addInContext() {
    if (!count) {
      setProductsInCart((prev) => prev + 1)
      count = true
    }

    navigation.navigate('Word', word)
    console.log(productsInCart)
  }
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.touchable}
      onPress={() => addInContext()}>
      <View style={styles.View}>
        <Image
          style={styles.image}
          source={{
            uri: word.image_code,
          }}></Image>
        <View style={styles.Details}>
          <Text numberOfLines={4} style={styles.Tittle}>
            {word.word}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
export const styles = StyleSheet.create({
  touchable: {
    width: 170,
    justifyContent: 'center',
    marginLeft: 11,
    paddingBottom: 11,
  },
  image: {
    width: 130,
    height: 160,
  },
  description: {
    overflow: 'hidden',
    maxHeight: 170,
    maxWidth: 205,
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.6)',
    marginTop: 5,
  },
  View: {
    backgroundColor: '#8A6B3F',
    borderRadius: 14,
    flexDirection: 'column',
    position: 'relative',
    alignItems: 'center',

    padding: 15,
    width: 170,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomStyle: 'solid',
  },
  Tittle: {
    maxWidth: 200,
    fontSize: 17,
    fontWeight: '700',
  },
  ButtonText: {
    fontSize: 12,
    textAlign: 'center',
  },
  Button: {
    backgroundColor: '#F9CA9C',
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
