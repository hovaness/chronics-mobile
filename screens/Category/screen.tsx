import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { CategoryScreenRouteProp } from '../../types.nav'
import { useRoute } from '@react-navigation/native'
import supabase from '../../lib/supabase'
import { Word } from '../Category/components/Word'
import UseDebounce from './Debounds/debounds'
import { IWords } from '../../models/IWords'

const CategoryScreen = () => {
  const { params } = useRoute<CategoryScreenRouteProp>()
  const [word, setWord] = useState<IWords[]>([])
  const [query, setQuery] = useState('')
  const debouncedSearch = UseDebounce(query, 300)

  useEffect(() => {
    getProducts()
  }, [])

  useMemo(() => {
    const newQuery = query.trim()
    SearchWord(newQuery)
  }, [debouncedSearch])

  async function getProducts() {
    let { data, error } = await supabase.rpc('show_words_from_category', {
      cat_name: params.name,
    })
    setWord(data)
    if (error) console.error(error)
    else console.log(data)
  }

  async function SearchWord(word) {
    try {
      let { data } = await supabase
        .rpc('show_words_from_category', { cat_name: params.name })
        .ilike('word', `%${word}%`)
      if (data) {
        setWord(data)
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    }
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{ backgroundColor: params.color_code, flex: 1, minHeight: 800 }}>
        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 32 }}>
          {params.name}
        </Text>
        <View style={styles.containerDesription}>
          <View style={styles.descriptionContent}>
            <Text style={{ textAlign: 'center' }}>{params.description}</Text>
          </View>
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.Input}
            onChangeText={(e) => setQuery(e)}
            value={query}
            placeholder="Поиск..."
          />
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
