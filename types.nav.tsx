import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import ICategory from './models/ICategory'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native'
import { IWords } from './models/IWords'
import { IGame } from './models/IGame'
import { IQuestion } from './models/IQuestion'

export type RootStackParamList = {
  Root: NavigatorScreenParams<TabStackParamList>
  Category: ICategory
  Word: IWords
  Greeting: NavigatorScreenParams<GreetingStackParamList>
  GameZone: undefined
  Question: IGame
  Favorite: IWords
  Word2: IWords
}

export type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, 'Home'>,
  NativeStackNavigationProp<RootStackParamList>
>

export type TabStackParamList = {
  Home: undefined
  Account: undefined
  Shop: undefined
}

export type GreetingStackParamList = {
  Information: undefined
  Welcome: undefined
  Register: undefined
}

export type RootScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>

export type CategoryScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Category'
>
export type CategoryScreenRouteProp = RouteProp<RootStackParamList, 'Category'>

export type WordScreenNavigatorProp = NativeStackNavigationProp<
  RootStackParamList,
  'Word'
>
export type WordScreenRouteProp = RouteProp<RootStackParamList, 'Word'>

export type Word2ScreenNavigatorProp = NativeStackNavigationProp<
  RootStackParamList,
  'Word2'
>
export type Word2ScreenRouteProp = RouteProp<RootStackParamList, 'Word2'>

export type GreetingScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>

export type GreetingScreenRouteProp = RouteProp<RootStackParamList>

export type QuestionScreenNavigatorProp = NativeStackNavigationProp<
  RootStackParamList,
  'Question'
>
export type QuestionScreenRouteProp = RouteProp<RootStackParamList, 'Question'>
