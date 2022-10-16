import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect} from 'react';

const screenWidth = Dimensions.get('screen').width;

const SlideShow = () => {
  
  return (
    <View style={styles.container}>
        <Image style={ styles.image}
          source={ require('../../assets/NikeBanner.jpg') } />
        <Image style={ styles.image}
        source={ require('../../assets/FitnessBanner.jpg') } />
        <Image style={ styles.image}
          source={ require('../../assets/MenBanner.jpg') } />
    </View>
  )
}

export default SlideShow

const styles = StyleSheet.create({
   container: {
    width: screenWidth,
    height: 300,
    paddingHorizontal: 10,
    flexDirection: 'row',
    overflowX: 'scroll',
   },
   image: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    resizeMode:'contain',
    marginHorizontal: 5,
  },
})