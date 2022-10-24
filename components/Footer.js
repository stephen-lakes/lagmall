import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome, Fontisto, MaterialIcons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';


const Footer = () => {
  return (
    <View>
      <Row />
    </View>
  )
}

const Row = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.column, { color: '#2d2a2a' }]}>
                <View  style={[styles.columnCircle, {backgroundColor: '#e50c0c' }]}>
                <MaterialCommunityIcons name='star-four-points' size={16} color='#fff' />
                </View>
                <Text style={{ fontWeight: '600' }}>Quick Delivery</Text>
            </View>
            <View style={[styles.column, { color: '#2d2a2a' }]}>
                <View  style={[styles.columnCircle, {backgroundColor: '#e50c0c' }]}>
                <MaterialCommunityIcons name='star-four-points' size={16} color='#fff' />
                </View>
                <Text style={{ fontWeight: '600' }}>Easy and safe payment</Text>
            </View>
            <View style={[styles.column, { color: '#2d2a2a' }]}>
                <View  style={[styles.columnCircle, {backgroundColor: '#e50c0c' }]}>
                <MaterialCommunityIcons name='star-four-points' size={16} color='#fff' />
                </View>
                <Text style={{ fontWeight: '600' }}>Return policy</Text>
            </View>
            <View style={[styles.column, { color: '#2d2a2a' }]}>
                <View  style={[styles.columnCircle, {backgroundColor: '#e50c0c' }]}>
                <MaterialCommunityIcons name='star-four-points' size={16} color='#fff' />
                </View>
                <Text style={{ fontWeight: '600' }}>Need help?</Text>
            </View>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'flex-start',
        flexWrap: 'wrap',
        textAlign: 'center',
        marginVertical: 0,
        marginHorizontal: 8,
      },
      column: {
        alignItems: 'center',
        width: 60,
      },
      columnCircle: {
        width: 40,
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }
})