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
import { useState } from 'react'
import { CartContext } from './context/context'
import { Welcome } from './screens/Lets Go/components/Welcome'
import { Information } from './screens/Lets Go/components/Information'
import WelcomeNavigate from './navigation/WelcomeNavigate'
import { Register } from './screens/Lets Go/components/Register'
import { LogContext, useContextForLog } from './context/contextForLog'
import { UserContext } from './context/contexUser'
import 'expo-dev-client'
import IUser from './models/IUser'
import Favoritescreen from './screens/Word/Favorite'
const Stack = createNativeStackNavigator<RootStackParamList>()

function Root() {
  return <Tabs />
}
function Greeting() {
  return <WelcomeNavigate />
}

export default function App() {
  const [productsInCart, setProductsInCart] = useState(0)
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
  console.log(isLog)
  return (
    <UserContext.Provider value={userValues}>
      <CartContext.Provider value={cartValues}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator>
              {isLog ? (
                <Stack.Screen
                  name="Greeting"
                  component={Greeting}
                  options={{
                    animation: 'fade_from_bottom',
                    headerShown: false,
                  }}
                />
              ) : (
                <Stack.Group>
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
                    name="Favorite"
                    component={Favoritescreen}
                    options={{ animation: 'fade_from_bottom' }}
                  />
                </Stack.Group>
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </CartContext.Provider>
    </UserContext.Provider>
  )
}
