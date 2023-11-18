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

const Stack = createNativeStackNavigator()

export default function WelcomeNavigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
  )
}
