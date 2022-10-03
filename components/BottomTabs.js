import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import React from 'react';

const BottomTabs = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.navLink}>
          <MaterialIcons name='storefront' size={24} color='black' />
          <Text style={styles.navLinkText}>Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navLink}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>0</Text>
          </View>
          <SimpleLineIcons name='bag' size={24} color='#333333' />
          <Text style={styles.navLinkText}>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navLink}>
        <Feather name='heart' size={24} color='black' />
        <Text style={styles.navLinkText}>WishList</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navLink}>
        <Feather name='user' size={24} color='black' />
        <Text style={styles.navLinkText}>My account</Text>
      </TouchableOpacity>
      </View>
    </View>
    
  )
}

export default BottomTabs;

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#ff3250',
    position: 'absolute',
    left: 15,
    bottom: 30,
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
  navLink: {
    alignItems: 'center',
  },
  navLinkText: {
    fontWeight: '600',
  },
  wrapper: {
    position: 'fixed',
    width: '100%',
    bottom: 0,
    backgroundColor: '#ffffff',
    zIndex: 999
  }
})