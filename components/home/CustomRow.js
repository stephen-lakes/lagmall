import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome, Fontisto, MaterialIcons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

const CustomRow = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.column, { color: '#2d2a2a' }]}>
        <View  style={[styles.columnCircle, {backgroundColor: '#e50c0c' }]}>
          <MaterialCommunityIcons name='star-four-points' size={16} color='#fff' />
        </View>
        <Text style={{ fontWeight: '600' }}>Deals of the Day</Text>
      </View>
      <View style={[styles.column, { color: '#2d2a2a' }]}>
        <View  style={[styles.columnCircle, { backgroundColor: '#1e9de9' }]}>
          <SimpleLineIcons name='badge' size={16} color='#fff' />
        </View>
        <Text style={{ fontWeight: '600' }}>Top rated Store</Text>
      </View>
      <View style={[styles.column, {color: '#2d2a2a' }]}>
        <View  style={[styles.columnCircle, { backgroundColor: '#45ad05' }]}>
          <FontAwesome name='shopping-basket' size={16} color="#fff" />
        </View>
        <Text style={{ fontWeight: '600' }}>Wholesale items</Text>
      </View>
      <View style={ [styles.column, { color: '#2d2a2a' }]}>
        <View  style={[styles.columnCircle, { backgroundColor: '#f2be02' }]}>
          <Fontisto name='shopping-store' size={16} color='#fff' />
        </View>
        <Text style={{ fontWeight: '600' }}>Become a vendor</Text>
      </View>
    </View>
  )
}

export default CustomRow

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    textAlign: 'center',
    marginVertical: 0,
    marginTop: -40, 
  },
  column: {
    alignItems: 'center',
    maxWidth: 60
  },
  columnCircle: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
})