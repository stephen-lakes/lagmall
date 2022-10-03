import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {  Ionicons, Octicons, SimpleLineIcons } from '@expo/vector-icons';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Octicons name='three-bars' size={24} color='#333333' />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/header-logo.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name='md-search-outline' size={24} color='#333333' />
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>0</Text>
        </View>
        <SimpleLineIcons name='bag' size={24} color='#333333' />
      </TouchableOpacity>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#ff3250',
    position: 'absolute',
    left: 15,
    bottom: 12,
    width: 20,
    height: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  badgeText: {
    color: 'white',
    fontWeight: '600'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain'
  }
})