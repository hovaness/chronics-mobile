import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { WordScreenRouteProp } from '../../types.nav'
import { useRoute } from '@react-navigation/native'

export const WordScreen = () => {
  const { params } = useRoute<WordScreenRouteProp>()
  console.log(params)
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: params.image_code,
          }}></Image>
        <View style={styles.content}>
          <Text style={styles.word}>{params.word}</Text>
          <Text style={styles.definition}>{params.definition}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E9E2B6',
    flex: 1,
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 35,
  },
  image: {
    width: 130,
    height: 200,
  },
  word: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 32,
  },
  definition: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
})
