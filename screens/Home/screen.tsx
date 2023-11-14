import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect, useMemo, useState } from 'react'
import { useFonts } from 'expo-font'
import supabase from '../../lib/supabase'
import Category from './components/Category'
import ICategory from '../../models/ICategory'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { RootScreenNavigationProp } from '../../types.nav'

const HomeScreen = () => {
  const [fontsLoaded, error] = useFonts({
    Cormorant: require('../../assets/fonts/CormorantUnicase-Bold.ttf'),
    Jost: require('../../assets/fonts/Jost-Medium.ttf'),
    'Jost-Light': require('../../assets/fonts/Jost-Light.ttf'),
  })
  const navigation = useNavigation<RootScreenNavigationProp>()

  const [categories, setCategories] = useState<ICategory[]>([])

  useEffect(() => {
    getName()
  }, [])
  if (!fontsLoaded && !error) {
    return null
  }
  async function getName() {
    try {
      const { data, error, status } = await supabase.from('CATEGORY').select()
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
    } finally {
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Сюда добавить все что идет до категорий */}
      <Text style={styles.title}>Хроники уебики</Text>
      {/* Карусель категорий */}
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
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
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
})
