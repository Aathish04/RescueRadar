import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../Components/Header';
import Card from '../Components/Card';
import { useNavigation } from '@react-navigation/native';

export default function Homescreen() {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card
        imgSrc={require('../assets/sos.png')}
        onPress={() => navigation.navigate('SOS')}
      />
      <Card
        imgSrc={require('../assets/warning-sign.png')}
        onPress={() => navigation.navigate('Earlywarn')}
      />
      <Card imgSrc={require('../assets/barter.png')} />
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
      <Card
        imgSrc={require('../assets/ambulance.png')}
        onPress={() => navigation.navigate('RescueActivitiesTracking')}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
