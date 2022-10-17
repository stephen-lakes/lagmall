import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {  Ionicons, Octicons, SimpleLineIcons } from '@expo/vector-icons';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Octicons name='three-bars' size={20} color='#333333' style={{ paddingHorizontal: 10 }} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/header-logo.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name='md-search-outline' size={20} color='#333333' />
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>0</Text>
        </View>
        <SimpleLineIcons name='bag' size={20} color='#333333' />
      </TouchableOpacity>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#ff3250',
    position: 'absolute',
    left: 12,
    bottom: 8,
    width: 17,
    height: 17,
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
    position: 'fixed',
    top: 40,
    backgroundColor: '#ffffff',
    width: '100%',
    zIndex: 999,
    borderBottomWidth: 2,
    borderBottomColor: '#f5f5f5',
  },
  logo: {
    width: 150,
    height: 48,
    resizeMode: 'contain'
  },
})