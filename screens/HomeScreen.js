import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import BottomTabs from '../components/BottomTabs';
import Header from '../components/home/Header';
import SlideShow from '../components/home/SlideShow';
import PlainTees from '../components/home/PlainTees';
import CustomRow from '../components/home/CustomRow';
import Banner from '../components/Banner';

import { BANNER } from '../data/Banner';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Header />
      <View style={{ marginTop: 50 }}>
        <SlideShow />
        <CustomRow />
        <PlainTees />
        <Banner path={BANNER[0]} />
        <Banner path={BANNER[1]} />
      </View>
      <BottomTabs />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  
})