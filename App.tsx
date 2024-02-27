// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { View,Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import Orders from './screens/Orders';
import MyTabs from './navigation/BBottomtabNavigation';



const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const DrawerContent = ({ navigation }) => (
  <View style={styles.drawerContent}>
    {/* Your drawer content components */}
    <Button title="Go to Profile" onPress={() => navigation.navigate('Orders')} />
  </View>
);
{/*
const BottomTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Orders" component={Orders} />
  </Tab.Navigator>
);
*/}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="SouqArena"  component={MyTabs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: 'white', // Adjust as needed
    paddingTop: 50, // Adjust as needed
  },
});
