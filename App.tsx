import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import LoginScreen from './screens/LoginScreen'
import DashboardScreen from './screens/DashboardScreen'
import RootStackParamList from './@types/RootStackPramList'
import BottomTabsParamList from './@types/BottomTabsParamList'
import ExtractScreen from './screens/ExtractScreen'
import PagoPAScreen from './screens/PagoPAScreen'
import ProfileScreen from './screens/ProfileScreen'
import HouseIcon from './icons/HouseIcon'
import FileIcon from './icons/FileIcon'
import PagoPAIcon from './icons/PagoPAIcon'
import UserIcon from './icons/UserIcon'
import PaymentDetailsScreen from './screens/PaymentDetailsScreen'

const Stack = createNativeStackNavigator<RootStackParamList>()
const BottomTabs = createBottomTabNavigator<BottomTabsParamList>()

const BottomNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarStyle: { height: 69, paddingBottom: 16, paddingTop: 8 },
        headerStyle: { backgroundColor: '#7476ED' },
        headerTintColor: 'white',
      }}
    >
      <BottomTabs.Screen
        name='Dashboard'
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <HouseIcon color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <BottomTabs.Screen
        name='Extract'
        component={ExtractScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FileIcon color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name='PagoPA'
        component={PagoPAScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <PagoPAIcon color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <BottomTabs.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <UserIcon color={color} size={size} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Login'
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='BottomTabs'
            component={BottomNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='PaymentDetails'
            component={PaymentDetailsScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
