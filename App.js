import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/Home/screen';
import SettingsScreen from './screens/Settings/screen';
import AccountScreen from './screens/Account/screen';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          tabBarInactiveTintColor: '#575757',
          tabBarActiveTintColor:'#278D9A',
        }}>
          <Tab.Screen name='Home' component={HomeScreen} options={{
            tabBarIcon: ({color}) => <AntDesign name="home" size={24} color={color}/>,
            tabBarLabel:'Домашняя'
          }}/>
          <Tab.Screen name='Settings' component={SettingsScreen} options={{
            tabBarIcon: ({color}) => <AntDesign name="setting" size={24} color={color} />,
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


