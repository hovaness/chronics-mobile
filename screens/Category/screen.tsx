import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CategoryScreenRouteProp } from '../../types.nav'
import { useRoute } from '@react-navigation/native'
import supabase from '../../lib/supabase'
import { Word } from '../Category/components/Word'

const CategoryScreen = () => {
  const [word, setWord] = useState([])
  async function getProducts() {
    try {
      const { data } = await supabase.from('WORD').select()
      if (data) {
        console.log(data)
        setWord(data)
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

  const { params } = useRoute<CategoryScreenRouteProp>()
  return (
    <View style={{ backgroundColor: params.color_code, flex: 1 }}>
      <Text style={{ color: '#fff', textAlign: 'center', fontSize: 32 }}>
        {params.name}
      </Text>
      <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16 }}>
        {params.description}
      </Text>
      <View style={styles.View}>
        {word.map((word) => (
          <Word word={word} key={word.word} />
        ))}
      </View>
    </View>
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
})
