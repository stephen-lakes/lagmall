import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BottomTabs = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text>home</Text>
        <Text>cart</Text>
        <Text>categories</Text>
        <Text>account</Text>
      </View>
    </View>
    
  )
}

export default BottomTabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
  wrapper: {
    position: 'fixed',
    width: '100%',
    bottom: 0,
    backgroundColor: '',
    zIndex: 999
  }
})