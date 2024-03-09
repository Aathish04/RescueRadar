import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image, Button } from 'react-native';

const Donate = ({ route }) => {
  const { donation } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={donation.image} />
      <Text style={styles.title}>{donation.title}</Text>
      <Text style={styles.details}>Categories: {donation.categories}</Text>
      <Text style={styles.details}>Days left: {donation.daysLeft}</Text>
      <View style={styles.donationStatus}>
        <Text style={styles.amountRaised}>${donation.amountRaised}</Text>
        <Text style={styles.target}>/${donation.target}</Text>
      </View>
      {/* Add a progress bar component here */}
      <Button title="Donate" onPress={() => {}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
  },
  details: {
    padding: 10,
  },
  donationStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  amountRaised: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  target: {
    fontSize: 18,
  },
  // Add styles for your button and progress bar
});

export default Donate;
