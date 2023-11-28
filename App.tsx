import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native'
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'
import CategoryScreen from './screens/Category/screen'
import Tabs from './navigation/Tabs'
import { WordScreen } from './screens/Word/screen'
import ICategory from './models/ICategory'
import { RootStackParamList } from './types.nav'
import { useEffect, useMemo, useState } from 'react'
import { CartContext } from './сontext/context'
import { Welcome } from './screens/Lets Go/components/Welcome'
import { Information } from './screens/Lets Go/components/Information'
import WelcomeNavigate from './navigation/WelcomeNavigate'
import { Register } from './screens/Lets Go/components/Register'
import { LogContext, useContextForLog } from './сontext/contextForLog'
import { UserContext } from './сontext/contexUser'
import 'expo-dev-client'
import IUser from './models/IUser'
import Favoritescreen from './screens/Word/Favorite'
import supabase from './lib/supabase'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Word2 } from './screens/Word/Word2'
const Stack = createNativeStackNavigator<RootStackParamList>()

function Root() {
  return <Tabs />
}
function Greeting() {
  return <WelcomeNavigate />
}

export default function App() {
  const [productsInCart, setProductsInCart] = useState(0)
  const [currUser, setCurrUser] = useState<any>(null)
  const [isLog, setIsLog] = useState(true)
  const [user, setUser] = useState<IUser>()
  const userValues = {
    user,
    setUser,
    isLog,
    setIsLog,
  }
  const cartValues = {
    productsInCart,
    setProductsInCart,
  }

  useEffect(() => {
    getMyUser()
  }, [])

  const getMyUser = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setCurrUser(user)
      return user
    } catch (error) {
      throw new Error(error)
    }
  }

  return (
    <UserContext.Provider value={userValues}>
      <CartContext.Provider value={cartValues}>
        <SafeAreaProvider>
          <NavigationContainer>
            {currUser == null || undefined ? (
              <>
                <Stack.Navigator initialRouteName="Greeting">
                  <Stack.Screen
                    name="Greeting"
                    component={Greeting}
                    options={{
                      animation: 'fade_from_bottom',
                      headerShown: false,
                    }}
                  />
                  <Stack.Screen
                    name="Root"
                    component={Root}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Category"
                    component={CategoryScreen}
                    options={{
                      animation: 'fade_from_bottom',
                      headerTitle: 'Категории',
                    }}
                  />
                  <Stack.Screen
                    name="Word"
                    component={WordScreen}
                    options={{ animation: 'fade_from_bottom' }}
                  />
                  <Stack.Screen
                    name="Word2"
                    component={Word2}
                    options={{ animation: 'fade_from_bottom' }}
                  />
                  <Stack.Screen
                    name="Favorite"
                    component={Favoritescreen}
                    options={{ animation: 'fade_from_bottom' }}
                  />
                </Stack.Navigator>
              </>
            ) : (
              <>
                <Stack.Navigator>
                  <Stack.Screen
                    name="Root"
                    component={Root}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Category"
                    component={CategoryScreen}
                    options={{ animation: 'fade_from_bottom' }}
                  />
                  <Stack.Screen
                    name="Word"
                    component={WordScreen}
                    options={{ animation: 'fade_from_bottom' }}
                  />
                  <Stack.Screen
                    name="Word2"
                    component={Word2}
                    options={{ animation: 'fade_from_bottom' }}
                  />
                  <Stack.Screen
                    name="Favorite"
                    component={Favoritescreen}
                    options={{ animation: 'fade_from_bottom' }}
                  />
                </Stack.Navigator>
              </>
            )}
          </NavigationContainer>
        </SafeAreaProvider>
      </CartContext.Provider>
    </UserContext.Provider>
  )
}
