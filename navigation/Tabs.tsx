import React from 'react'
import { BottomTabNavigationProp, BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import HomeScreen from '../screens/Home/screen';
import ShopScreen from '../screens/Shop/screen';
import AccountScreen from '../screens/Account/screen';
import { AntDesign } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

// type TabStackParamList = {
//   Home: undefined,
//   Shop: undefined,
//   Account: undefined,
// }

// export type Props = BottomTabScreenProps<TabStackParamList>




const Tabs = () => {
  return (
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
          headerShown:false,
          tabBarIcon: ({color}) => <AntDesign name="home" size={24} color={color}/>,
        }}/>
        <Tab.Screen name='Shop' component={ShopScreen} options={{
          tabBarIcon: ({color}) => <Entypo name="shop" size={24} color={color} />,
          headerShown:false,
        }}/>
        <Tab.Screen name='Account' component={AccountScreen} options={{
          headerShown:false,
          tabBarIcon: ({color}) => <AntDesign name="user" size={24} color={color} />
        }}/>
    </Tab.Navigator>
  )
}

export default Tabs