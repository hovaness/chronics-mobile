import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

import React, { useState } from 'react'

import { IWords } from '../../../models/IWords'
import { useNavigation } from '@react-navigation/native'
import {
  Word2ScreenNavigatorProp,
  WordScreenNavigatorProp,
} from '../../../types.nav'
import { useStatisticContext } from '../../../сontext/context'
import supabase from '../../../lib/supabase'
import { AntDesign } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useUserContext } from '../../../сontext/contexUser'

interface WordProps {
  word: IWords
}
let count = false
export const WordForFavour = ({ word }: WordProps) => {
  const { isLog, setIsLog } = useUserContext()
  const { productsInCart, setProductsInCart } = useStatisticContext()
  const [del, setDel] = useState(false)
  const navigation = useNavigation<Word2ScreenNavigatorProp>()

  const deleteFromfavourites = async function () {
    await supabase.rpc('update_favorites_false', {
      user_id_input: 8,
      word_input: word.word,
    })
    setIsLog((prev) => !prev)
    console.log('Удаление')
  }

  function LearningWord() {
    console.log(word.definition)
    navigation.navigate('Word2', word)
  }
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.touchable}
      onPress={() => LearningWord()}>
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
      <TouchableOpacity
        style={styles.touchableClose}
        onPress={() => deleteFromfavourites()}>
        <AntDesign name="close" size={15} color="white" />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export const styles = StyleSheet.create({
  touchableClose: {
    position: 'absolute',
    top: 15,
    right: 5,
  },
  touchable: {
    width: 170,
    justifyContent: 'center',
    marginLeft: 11,
    paddingBottom: 11,
    position: 'relative',
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
