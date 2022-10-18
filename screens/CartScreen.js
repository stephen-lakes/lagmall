import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';

const Whislist = () => {
  const [cart, setcart] = useState({});
  
  return (
    <SafeAreaView>
      <Header />
      <View style={{ marginTop: 50 }}>
      {
        cart.length > 0 ? 
          <Text>you have no item in your wish list</Text>
        :
          <View>
            <Text>list of wishlist items</Text>
          </View>
      }
      </View>
      <BottomTabs />
    </SafeAreaView>
  )
}

export default Whislist

const styles = StyleSheet.create({})