import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../Components/Header';
import Card from '../Components/Card';


export default function Homescreen() {
  return (
    <View style={styles.container}>
    <Header/>
        
        <Card/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  }
});
