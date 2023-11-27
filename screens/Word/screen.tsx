import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { WordScreenNavigatorProp, WordScreenRouteProp } from '../../types.nav'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useUserContext } from '../../context/contexUser'
import supabase from '../../lib/supabase'

export const WordScreen = () => {
  const { params } = useRoute<WordScreenRouteProp>()
  const navigation = useNavigation<WordScreenNavigatorProp>()
  const { user } = useUserContext()

  const [favorite, setFavourite] = useState(false)

  useEffect(() => {
    FavouriteWord()
  }, [])

  async function FavouriteWord() {
    let { data, error } = await supabase.rpc('select_learning_word', {
      input_word: params.word,
      user_id_input: 8,
    })
    console.log(data)
    setFavourite(data)
    if (error) console.error(error)
    else console.log(data)
  }

  const addInfavourites = async function () {
    await supabase.rpc('update_favorites_true', {
      user_id_input: 8,
      word_input: params.word,
    })
    console.log('Я добавляю')
  }

  const deleteFromfavourites = async function () {
    await supabase.rpc('update_favorites_false', {
      user_id_input: 8,
      word_input: params.word,
    })
    console.log('Удаление')
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: params.image_code,
          }}></Image>
      </View>
      <View style={styles.content}>
        <Text style={styles.word}>{params.word}</Text>
        <Text style={styles.definition}>"{params.quote}"</Text>
        <Text style={styles.definition}>{params.definition}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          setFavourite((prev) => !prev)
          console.log(favorite)
          favorite ? deleteFromfavourites() : addInfavourites()
        }}>
        <View style={{ backgroundColor: 'red,' }}>
          <Text> В избранное</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
        <View style={{ backgroundColor: 'red,' }}>
          <Text>Избранное</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E9E2B6',
    flex: 1,
    alignItems: 'center',
  },
  content: {
    padding: 15,
    marginBottom: 15,
    marginTop: 15,
    backgroundColor: '#FCBF4A',
    paddingBottom: 25,
    minWidth: 350,
    maxWidth: 390,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 25,
  },
  imageContainer: {
    marginTop: 15,
    justifyContent: 'center',
    backgroundColor: '#FF902B',
    minHeight: 200,
    flexDirection: 'row',
    width: 380,
    borderRadius: 15,
  },
  image: {
    margin: 15,
    width: 130,
    height: 200,
  },
  word: {
    color: 'black',
    textAlign: 'center',
    fontSize: 32,
  },
  definition: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
  },
})
