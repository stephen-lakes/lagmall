import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import BottomTabs from '../components/BottomTabs';
import Header from '../components/home/Header';

const HomeScreen = () => {
  return (
    <SafeAreaView>
        <View>
            <Header />
            {/* body */}
            <BottomTabs />
        </View>
    </SafeAreaView>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({})