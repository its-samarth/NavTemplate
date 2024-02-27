import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // Import from react-native-vector-icons
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';

const MenuBar = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'black', paddingVertical: 10 }}>
      <TouchableOpacity >
        <Icon name="home" size={24} color="white" /> {/* Use Icon instead of Feather */}
        <Text style={{ color: 'white' }}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="user" size={24} color="white" /> {/* Use Icon instead of Feather */}
        <Text style={{ color: 'white' }}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity >
        <Icon name="credit-card" size={24} color="white" /> {/* Use Icon instead of Feather */}
        <Text style={{ color: 'white' }}>Wallet</Text>
      </TouchableOpacity>
      <TouchableOpacity >
        <Icon name="list" size={24} color="white" /> {/* Use Icon instead of Feather */}
        <Text style={{ color: 'white' }}>Orders</Text>
      </TouchableOpacity>
      {/* Other TouchableOpacity components */}
    </View>
  );
};

export default MenuBar;

      {/*
      <TouchableOpacity onPress={() => navigation.navigate('Returns')}>
        <Feather name="refresh-cw" size={24} color="white" />
        <Text style={{ color: 'white' }}>Returns</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
        <Feather name="heart" size={24} color="white" />
        <Text style={{ color: 'white' }}>Wishlist</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Address')}>
        <Feather name="map-pin" size={24} color="white" />
        <Text style={{ color: 'white' }}>Address</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Logout')}>
        <Feather name="log-out" size={24} color="white" />
        <Text style={{ color: 'white' }}>Logout</Text>
      </TouchableOpacity>
      * */}


