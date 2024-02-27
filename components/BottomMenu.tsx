import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons'; // You can replace Feather with any icon library you prefer
import { useNavigation } from '@react-navigation/native';

const BottomNavBar = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'blue', paddingVertical: 10 }}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Feather name="home" size={24} color="white" />
        <Text style={{ color: 'white' }}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <Feather name="search" size={24} color="white" />
        <Text style={{ color: 'white' }}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Feather name="shopping-cart" size={24} color="white" />
        <Text style={{ color: 'white' }}>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Feather name="user" size={24} color="white" />
        <Text style={{ color: 'white' }}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Orders')}>
        <Feather name="list" size={24} color="white" />
        <Text style={{ color: 'white' }}>Orders</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavBar;
