import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DonationCard = ({ donation }) => {
  const progress = donation.amountRaised / donation.target * 100;
  const imgSrc = donation.image;
  return (
    <View style={styles.card}>
      <Image source={imgSrc} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{donation.title}</Text>
        <Text style={styles.text}>Organization: {donation.organization}</Text>
        <Text style={styles.text}>Days Left: {donation.daysLeft}</Text>
        <Text style={styles.text}>Target: ₹{donation.target}</Text>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${progress}%` }]} />
        </View>
        <Text style={styles.text}>{progress.toFixed(2)}% Raised</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    alignItems: 'center',
  },
  image: {
    width: 100, // Adjust based on your layout
    height: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    marginBottom: 5,
  },
  progressBarContainer: {
    height: 10,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 5,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4caf50',
  },
});

export default DonationCard;
