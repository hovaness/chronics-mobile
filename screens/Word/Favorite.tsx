import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { CategoryScreenRouteProp, WordScreenRouteProp } from '../../types.nav'
import { useRoute } from '@react-navigation/native'
import supabase from '../../lib/supabase'
import { Word } from '../Category/components/Word'
import UseDebounce from '../Category/Debounds/debounds'
import { IWords } from '../../models/IWords'
import { useUserContext } from '../../context/contexUser'

const CategoryScreen = () => {
  const { params } = useRoute<WordScreenRouteProp>()
  const { user } = useUserContext()
  const [word, setWord] = useState<IWords[]>([])
  useEffect(() => {
    getProducts()
  }, [])

  async function getProducts() {
    let { data, error } = await supabase.rpc('show_favorite_words', {
      user_id_input: 8,
    })
    setWord(data)
    if (error) console.error(error)
    else console.log(data)
  }
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ backgroundColor: '#ffff', flex: 1, minHeight: 800 }}>
        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 32 }}>
          Избранное
        </Text>
        <View style={styles.containerDesription}>
          <View style={styles.descriptionContent}>
            <Text style={{ textAlign: 'center' }}>
              тут лежать избранные слова
            </Text>
          </View>
        </View>
        <View style={styles.containerInput}>
          <TextInput style={styles.Input} placeholder="Поиск..." />
        </View>
        <View style={styles.View}>
          {word.map((word) => (
            <Word word={word} key={word.word} />
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

export default CategoryScreen

const styles = StyleSheet.create({
  View: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 20,
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  Input: {
    backgroundColor: '#ffff',
    width: 373,
    height: 40,
    borderRadius: 10,
    padding: 10,
  },
  containerInput: {
    alignItems: 'center',
    margin: 15,
  },
  containerDesription: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    backgroundColor: '#8A6B3F',
    width: 373,
    alignItems: 'center',
    marginLeft: 10,
    borderRadius: 10,
    minHeight: 60,
    padding: 15,
    marginTop: 10,
  },
  descriptionContent: {
    width: 300,
  },
})
function trim(query: string): any {
  throw new Error('Function not implemented.')
}
