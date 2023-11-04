import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import HomeScreen from './screens/Home/screen';
import ShopScreen from './screens/Shop/screen';
import AccountScreen from './screens/Account/screen';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          tabBarShowLabel: false,
          tabBarInactiveTintColor: '#7E7E7E',
          tabBarActiveTintColor:'#ffffff',
          tabBarStyle: {
            backgroundColor: '#333',
            width:335,
            right:20,
            left:20,
            borderRadius:20,
            height: 60,
            bottom:15,
            marginLeft:10
          }
        }}>
          <Tab.Screen name='Home' component={HomeScreen} options={{
            tabBarIcon: ({color}) => <AntDesign name="home" size={24} color={color}/>,
            tabBarLabel:'Домашняя'
          }}/>
          <Tab.Screen name='Shop' component={ShopScreen} options={{
            tabBarIcon: ({color}) => <Entypo name="shop" size={24} color={color} />,
            tabBarLabel:'Настройки'
          }}/>
          <Tab.Screen name='Account' component={AccountScreen} options={{
            tabBarLabel:'Аккаунт',
            tabBarIcon: ({color}) => <AntDesign name="user" size={24} color={color} />
          }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


