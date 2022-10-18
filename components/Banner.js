import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const screenWidth = Dimensions.get('screen').width;

const Banner = ({path}) => {
  return (
    <View style={{ alignItems: 'center', marginBottom: 8 }}>
      <Image
        style ={{ width: screenWidth * 0.95, height: 150 }}
        source={{ uri: path.imageUrl }}
      />
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({})