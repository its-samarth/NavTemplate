// Import necessary modules
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Orders from '../screens/Orders';
import { faHouse,faBoxesStacked,faUser,faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

// Define your screens


function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search Screen</Text>
    </View>
  );
}

function CartScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cart Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

// Define your bottom tab navigation
export default function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor:'blue',
      headerTintColor:'green',
      headerPressColor:'grey',
      tabBarActiveBackgroundColor:'lightblue',
      tabBarInactiveBackgroundColor:'white',
    }}
    >
      <Tab.Screen name="Home" options={{
        headerShown:false,
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon icon={faHouse} size={25} color={'#0390fc'} /> // Example usage of FontAwesome icon
        ),
      }}   component={HomeScreen} />
      <Tab.Screen name="Orders" options={{
        headerShown:false,
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon icon={faBoxesStacked}  size={25} color={'#0390fc'} /> // Example usage of FontAwesome icon
        ),
      }}  component={Orders} />
      <Tab.Screen name="Cart" options={{
        headerShown:false,
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon icon={faCartShopping} size={25} color={'#0390fc'} /> // Example usage of FontAwesome icon
        ),
      }}  component={CartScreen} />
      <Tab.Screen name="Profile"   
      options={{
        headerShown:false,
        tabBarIcon: ({ color, size }) => (
          <FontAwesomeIcon icon={faUser} size={25} color={'#0390fc'} /> // Example usage of FontAwesome icon
        ),
      }} component={ProfileScreen}
    />
    </Tab.Navigator>
  );
}


