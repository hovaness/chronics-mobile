import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { IGame } from '../../models/IGame'
import supabase from '../../lib/supabase'
import { QuizType } from './QuizType'
import { useFonts } from 'expo-font'
import { SafeAreaView } from 'react-native-safe-area-context'

export const GameZone = () => {
  const [quizs, setQuiz] = useState<IGame[]>([])
  const [fontsLoaded, error] = useFonts({
    'Cormorant':require('../../assets/fonts/CormorantUnicase-Bold.ttf'),
    'Jost': require('../../assets/fonts/Jost-Light.ttf'),
    'JostTitle': require('../../assets/fonts/Jost-Medium.ttf')
  })
  useEffect(() => {
    getQuiz()
  }, [])
  async function getQuiz() {
    try {
      const { data, error, status } = await supabase.from('QUIZ').select('*')
      if (error && status !== 406) {
        throw error
      }
      if (data) {
        setQuiz(data)
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    }
  }
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Игровая зона</Text>
        </View>
        <View style={styles.standart}>
          <Text style={styles.standartContent}>Стандартная викторина</Text>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonContent}>Играть</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.Content}>
          <Text style={styles.subtitle}>
            Другие викторины
          </Text>
          <View>
            <ScrollView
              style={styles.Scroll}
              horizontal
              showsHorizontalScrollIndicator={false}>
              {quizs.map((quiz) => (
                <QuizType quiz={quiz} key={quiz.name} />
              ))}
            </ScrollView>
          </View>
          <Text
            style={styles.subtitle}>
            Тренировочный режим
          </Text>
          <View style={{ alignItems: 'center' }}>
            <View style={styles.training}>
              <View style={styles.trainingContent}>
                <View>
                  <Text style={styles.trainingText}>
                    Отвечайте на вопросы выбранной категории сколько угодно!
                  </Text>
                  <Text style={styles.trainingButton}>Открыть</Text>
                </View>
                <Image
                  style={{ width: 130, height: 80, borderRadius: 15 }}
                  source={require('../../assets/public/game.png')}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  main: {
    boxSizing: 'border-box',
    flex: 1,
    backgroundColor: '#E9E2B6',
  },
  title: {
    fontSize: 24,
    margin: 10,
    fontFamily:'Cormorant'
  },
  subtitle:{
    fontFamily: 'Cormorant',
    fontSize:20,
    marginHorizontal:20,
    marginTop:20,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  standart: {
    backgroundColor: '#D46542',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '90%',
    height: '28%',
    borderRadius: 20,
  },
  standartContent: {
    fontSize: 18,
    padding: 30,
    fontFamily:'Cormorant',
    color: 'white'
  },
  button: {
    margin: 20,
  },
  buttonContent: {
    backgroundColor: '#A05036',
    borderRadius: 16,
    fontFamily:'Jost',
    color:'white',
    paddingHorizontal:20,
    paddingVertical:10,
  },
  Scroll: {
    marginLeft: 22,
    maxHeight: 150,
    margin: 0,
    flex: 1,
  },
  Content: {
    flexDirection: 'column',
    height: 300,
  },
  training: {
    borderRadius: 14,
    padding: 8,
    alignItems: 'center',
    width: 350,
    marginTop: 10,
    backgroundColor: '#F9CA9C',
  },
  trainingContent: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  },
  trainingText: {
    paddingBottom: 6,
    fontSize: 12,
    width: 160,
  },
  trainingButton: {
    padding: 3,
    paddingBottom: 6,
    paddingLeft: 1,
    paddingRight: 3,
    backgroundColor: 'blue',
    width: 64,
    borderRadius: 20,
  },
})
