import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Banner = ({path}) => {
  return (
    <View>
      <Image
        style ={{ width: 320, height: 150 }}
        source={{ uri: path.imageUrl }}
      />
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({})