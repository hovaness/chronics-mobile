import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native'
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'
import { Welcome } from '../screens/Lets Go/components/Welcome'
import { Information } from '../screens/Lets Go/components/Information'
import { Register } from '../screens/Lets Go/components/Register'
const Stack = createNativeStackNavigator()

export default function WelcomeNavigate() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ animation: 'fade_from_bottom', headerShown: false }}
      />
      <Stack.Screen
        name="Information"
        component={Information}
        options={{ animation: 'fade_from_bottom', headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ animation: 'fade_from_bottom', headerShown: false }}
      />
    </Stack.Navigator>
  )
}
