import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import { IGame } from '../../models/IGame'
import { useNavigation } from '@react-navigation/native'
import {
  ProfileScreenNavigationProp,
  QuestionScreenNavigatorProp,
} from '../../types.nav'
interface PropsIGame {
  quiz: IGame
}
export const QuizType = ({ quiz }: PropsIGame) => {
  const [fontsLoaded, error] = useFonts({
    Cormorant: require('../../assets/fonts/CormorantUnicase-Bold.ttf'),
    'Jost-Light': require('../../assets/fonts/Jost-Light.ttf'),
  })
  const navigation = useNavigation<QuestionScreenNavigatorProp>()

  if (!fontsLoaded && !error) {
    return null
  }
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => navigation.navigate('Question', quiz)}>
      <View
        style={{
          backgroundColor: quiz.color_code,
          width: 220,
          height: 140,
          paddingHorizontal: 10,
          paddingVertical: 20,
          borderRadius: 15,
          marginRight: 10,
        }}>
        <View style={styles.container}>
          <View style={styles.textView}>
            <Text style={styles.title}>{quiz.name}</Text>
            <Text numberOfLines={4} style={styles.desc}>
              {quiz.description}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  textView: {
    flexDirection: 'column',
    gap: 10,
    alignItems: 'flex-start',
  },
  title: {
    fontFamily: 'Cormorant',
    color: '#fff',
    fontSize: 16,
  },
  desc: {
    fontFamily: 'Jost-Light',
    color: '#f0f0f0',
    fontSize: 11,
    overflow: 'hidden',
  },
})
