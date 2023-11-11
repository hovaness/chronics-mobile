import {SafeAreaProvider} from 'react-native-safe-area-context'
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryScreen from './screens/Category/screen'
import Tabs from './navigation/Tabs'

import ICategory from './models/ICategory';
import { RootStackParamList } from './types.nav';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Root() {
  return(
    <Tabs/>
  )
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Root' component={Root} options={{headerShown:false}}/>
          <Stack.Screen name='Category' component={CategoryScreen} options={{animation:'fade_from_bottom'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


