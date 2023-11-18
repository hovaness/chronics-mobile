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
const Stack = createNativeStackNavigator<RootStackParamList>()

function Root() {
  return <Tabs />
}
function Greeting() {
  return <WelcomeNavigate />
}

export default function App() {
  const [productsInCart, setProductsInCart] = useState(0)
  const cartValues = {
    productsInCart,
    setProductsInCart,
  }
  return (
    <CartContext.Provider value={cartValues}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Welcome'>
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
              name="Welcome"
              component={Welcome}
              options={{ animation: 'fade_from_bottom' }}
            />
            <Stack.Screen
              name="Information"
              component={Information}
              options={{ animation: 'fade_from_bottom' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </CartContext.Provider>
  )
}
