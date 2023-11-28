import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import {
  Word2ScreenRouteProp,
  WordScreenNavigatorProp,
  WordScreenRouteProp,
} from '../../types.nav'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useUserContext } from '../../сontext/contexUser'
import supabase from '../../lib/supabase'
import { AntDesign } from '@expo/vector-icons'

export const Word2 = () => {
  const currentValue = new Animated.Value(1)
  const { params } = useRoute<Word2ScreenRouteProp>()
  const { isLog } = useUserContext()
  const [visible, setVisible] = useState(false)
  const [favorite, setFavourite] = useState(false)
  const AnimatedIcon = Animated.createAnimatedComponent(AntDesign)

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
