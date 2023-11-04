import {SafeAreaProvider} from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './navigation/Tabs'

const Stack = createNativeStackNavigator();

function Main() {
  return(
    <Tabs/>
  )
}

export default function App() {
  

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Main' component={Main}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


