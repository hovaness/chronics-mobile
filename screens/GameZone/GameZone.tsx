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

export const GameZone = () => {
  const [quizs, setQuiz] = useState<IGame[]>([])
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
    <View style={styles.main}>
      <View style={styles.container}>
        <View>
          <Text style={styles.tittle}>Игровая зона</Text>
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
          <Text style={{ padding: 15, marginLeft: 15, fontSize: 20 }}>
            Викторины
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
            style={{
              marginLeft: 26,
              fontSize: 20,
              paddingBottom: 2,
              paddingTop: 5,
            }}>
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
    </View>
  )
}
const styles = StyleSheet.create({
  main: {
    boxSizing: 'border-box',
    backgroundColor: '#E9E2B6',
    flex: 1,
  },
  tittle: {
    fontSize: 20,
    margin: 10,
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
    fontSize: 17,
    padding: 30,
  },
  button: {
    margin: 20,
  },
  buttonContent: {
    padding: 10,
    backgroundColor: '#A05036',
    borderRadius: 16,
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
