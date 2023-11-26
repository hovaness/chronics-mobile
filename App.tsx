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
import { CartContext } from './context/context'
import { Welcome } from './screens/Lets Go/components/Welcome'
import { Information } from './screens/Lets Go/components/Information'
import WelcomeNavigate from './navigation/WelcomeNavigate'
import { Register } from './screens/Lets Go/components/Register'
import { LogContext, useContextForLog } from './context/contextForLog'
import { UserContext } from './context/contexUser'
import 'expo-dev-client'
import IUser from './models/IUser'
import supabase from './lib/supabase'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Stack = createNativeStackNavigator<RootStackParamList>()

function Root() {
  return <Tabs />
}
function Greeting() {
  return <WelcomeNavigate />
}

export default function App() {
  const [productsInCart, setProductsInCart] = useState(0)
  const [currUser ,setCurrUser] = useState<any>();
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
    getMyUser();
  }, [])

  const getMyUser = async() => {
    try {
      const {data: {user}} = await supabase.auth.getUser();
      console.log(user)
      setCurrUser(user)
      return user;
    } catch (error) {
      throw new Error('Ассинхронное хранидище не работает');
    }
  }
  

  return (
    <UserContext.Provider value={userValues}>
      <CartContext.Provider value={cartValues}>
        <SafeAreaProvider>
          <NavigationContainer>
              {currUser == null ? (
                <>
                  <Stack.Navigator initialRouteName='Greeting'>
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
                      
                      options={{ animation: 'fade_from_bottom', headerTitle: "Категории" }}
                    />
                    <Stack.Screen
                      name="Word"
                      component={WordScreen}
                      options={{ animation: 'fade_from_bottom' }}
                    />
                  </Stack.Navigator>
                </>
              ) : (
                <>
                  <Stack.Navigator initialRouteName='Root'>
                    <Stack.Screen
                      name="Root"
                      component={Root}
                      options={{ headerShown: false }}
                    />
                    <Stack.Screen
                      name="Category"
                      component={CategoryScreen}
                      
                      options={{ animation: 'fade_from_bottom', headerTitle: "Категории" }}
                    />
                    <Stack.Screen
                      name="Word"
                      component={WordScreen}
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
