import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect, useMemo, useState } from 'react'
import { useFonts } from 'expo-font'
import supabase from '../../lib/supabase'
import Category from './components/Category'
import ICategory from '../../models/ICategory'

import { useNavigation } from '@react-navigation/native'
import { RootScreenNavigationProp } from '../../types.nav'
import { AntDesign } from '@expo/vector-icons'
import IUser from '../../models/IUser'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useUserContext } from '../../сontext/contexUser'

const HomeScreen = () => {
  const [fontsLoaded, error] = useFonts({
    Cormorant: require('../../assets/fonts/CormorantUnicase-Bold.ttf'),
    Jost: require('../../assets/fonts/Jost-Medium.ttf'),
    'Jost-Light': require('../../assets/fonts/Jost-Light.ttf'),
  })
  const navigation = useNavigation<RootScreenNavigationProp>()
  const [query, setQuery] = useState('')
  const [categories, setCategories] = useState<ICategory[]>([])

  const { setUser, user } = useUserContext()
  const [name, setName] = useState<string>()
  const [img, setImg] = useState<string>()

  useEffect(() => {
    getName()
    setUserFromStorage()
  }, [])

  if (!fontsLoaded && !error) {
    return null
  }

  async function setUserFromStorage() {
    try {
      const value = await AsyncStorage.getItem('user')
      console.log(value)
      const parsed = JSON.parse(value)
      setUser(parsed)
      setName(parsed.name)
      setImg(parsed.photo)
    } catch (error) {
      console.log(error)
    }
  }

  async function getName() {
    try {
      const { data, error, status } = await supabase
        .from('CATEGORY')
        .select('*')
      if (error && status !== 406) {
        throw error
      }
      if (data) {
        setCategories(data)
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    }
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Хроники</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Root', { screen: 'Account' })}>
            <Image
              style={styles.avatar}
              source={{
                uri: img,
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.username}>Привет, {name}!</Text>
        <Text style={styles.words}>Подобрали слова на сегодня</Text>
        {/* Поиск */}
        <View style={styles.containerInput}>
          <AntDesign
            style={styles.search}
            name="search1"
            size={20}
            color="black"
          />
          <TextInput
            onChangeText={(e) => setQuery(e)}
            value={query}
            placeholder="Найти слово..."
            placeholderTextColor="#585757"
            style={styles.Input}></TextInput>
        </View>

        {/* Карусель категорий */}

        <View style={styles.categoryTitleContainer}>
          <Text style={styles.categoryTitle}>Категории слов</Text>
          <TouchableOpacity>
            <AntDesign name="caretright" size={17} color="#ff8000" />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category) => (
            <Category
              name={category.name}
              description={category.description}
              color_code={category.color_code}
              key={category.name}
            />
          ))}
        </ScrollView>

        {/* Игровая зона */}
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.gameContainer}>
            <View style={styles.gameText}>
              <Text style={styles.gameTitle}>Игровая зона</Text>
              <Text style={styles.gameDesc}>Закрепить знания на практике</Text>
              <TouchableOpacity>
                <View style={styles.playButton}>
                  <Text style={styles.buttonText}>Играть</Text>
                </View>
              </TouchableOpacity>
            </View>
            <Image
              style={{ width: 150, height: 111, borderRadius: 15 }}
              source={require('../../assets/public/game.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  wrapper: {
    backgroundColor: '#E9E2B6',
    flex: 1,
    maxHeight: 1000,
  },
  container: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  title: {
    fontFamily: 'Cormorant',
    color: '#333',
    fontSize: 32,
    textTransform: 'uppercase',
  },
  username: {
    fontFamily: 'Cormorant',
    color: '#333',
    fontSize: 24,
    marginTop: 50,
  },
  words: {
    fontFamily: 'Jost',
    color: '#333',
    fontSize: 14,
    marginBottom: 45,
  },
  Input: {
    backgroundColor: '#ffff',
    width: 335,
    height: 40,
    borderRadius: 25,
    padding: 10,
    position: 'relative',
    fontFamily: 'Jost',
    flex: 1,
  },
  containerInput: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  search: {
    position: 'absolute',
    zIndex: 999,
    left: 320,
  },
  categoryTitleContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryTitle: {
    fontFamily: 'Cormorant',
    fontSize: 18,
  },
  gameContainer: {
    marginTop: 30,
    backgroundColor: '#FCBF4A',
    width: 'auto',
    height: 188,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  playButton: {
    backgroundColor: '#FF902B',
    borderRadius: 20,
  },
  gameText: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 10,
  },
  gameTitle: {
    fontFamily: 'Cormorant',
    fontSize: 20,
  },
  gameDesc: {
    fontFamily: 'Jost',
    width: 120,
    fontSize: 14,
  },
  buttonText: {
    fontFamily: 'Cormorant',
    fontSize: 14,
    color: '#fff',
    paddingHorizontal: 7,
    paddingVertical: 4,
  },
})
