import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React,{ useState } from 'react';
import { Feather, SimpleLineIcons } from '@expo/vector-icons';

import { PLAINTEES } from '../../data/Tees';

const Product = ({item}) => {
  return(
    <>
      <View style={styles.productCard}>
        <Image 
          style={{ width: 100, height: 100 }}
          source={{ uri: item.imageUrl}}
        />
        <Text style={styles.productName}>{ item.name }</Text>
        <Text style={styles.price}>{ item.price }</Text>
        <TouchableOpacity style={styles.btnAddToCart}>
          <SimpleLineIcons name='bag' size={16} color='#333333' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnAddToWishlist}>
          <Feather name='heart' size={16} color='#ff3250' />
        </TouchableOpacity>
      </View>
    </>

  )
}

const PlainTees = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>PlainTees</Text>
      <View>
        <FlatList
          horizontal={true}
          keyExtractor={(item) => item.id }
          data={PLAINTEES}
          renderItem={({item}) => <Product item={item} /> }
        />
      </View>
    </View>
  )
}

export default PlainTees

const styles = StyleSheet.create({
  btnAddToCart: {
    position: 'absolute',
    top: 10,
    left: '70%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 5,
    borderColor: 'gray',
    borderWidth: 1,
  },
  btnAddToWishlist: {
    position: 'absolute',
    top: 45,
    left: '70%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 5,
    borderColor: 'gray',
    borderWidth: 1,
  },
  container: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  price: {
    color: 'red',
    fontWeight: '600',
  },
  productCard: {
    marginRight: 30,
    maxWidth: 100,
  },
  productName: {

  },
  sectionTitle: {
    fontWeight: '600',
    padding: 10,
  }
})