import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../Components/Header';
import Card from '../Components/Card';
import { useNavigation } from '@react-navigation/native';


export default function Homescreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Card
        imgSrc={require('../assets/sos.png')}
        onPress={() => navigation.navigate('SOS')}
      />
      <Card
        imgSrc={require('../assets/warning-sign.png')}
        onPress={() => navigation.navigate('Earlywarn')}
        />
      <Card
        imgSrc={require('../assets/barter.png')}
        />
      <Card
        imgSrc={require('../assets/donation.png')}
        onPress={() => navigation.navigate('DonationHome')}
        />
        <Card
        imgSrc={require('../assets/data.png')}
        onPress={() => navigation.navigate('ShowQR')}
        />
        <Card
        imgSrc={require('../assets/scanner.png')}
        onPress={() => navigation.navigate('ReadQR')}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  }
});


