import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'
import ICategory from './models/ICategory'
import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs'
import {
  CompositeNavigationProp,
  CompositeScreenProps,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native'
import { IWords } from './models/IWords'

export type RootStackParamList = {
  Root: NavigatorScreenParams<TabStackParamList>
  Category: ICategory
  Word: IWords
  Greeting: NavigatorScreenParams<GreetingStackParamList>
  Favorite: IWords
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

export type GreetingScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>

export type GreetingScreenRouteProp = RouteProp<RootStackParamList>
