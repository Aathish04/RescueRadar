import React, {useState} from 'react';
import { ScrollView, StyleSheet, View, Text, Image, Button, TouchableOpacity} from 'react-native';

const DonationDetails = ({ route }) => {
  const { donation } = route.params;
  const progress = (donation.amountRaised / donation.target) * 100;

  const [readMore, setReadMore] = useState(false); // State to toggle description

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  const displayDescription = readMore ? donation.description : `${donation.description.substring(0, 100)}...`;

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={donation.image} />
      <Text style={styles.title}>{donation.title}</Text>
      <Text style={styles.description}>Description:</Text>
      <View>
        <Text style={styles.text}>{displayDescription}</Text>
        <TouchableOpacity onPress={toggleReadMore}>
          <Text style={styles.readMoreText}>{readMore ? 'Read Less' : 'Read More'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.firstrow}>
        <Text style={styles.halfRow}>Category: {donation.categories}</Text>
        <Text style={styles.halfRow}>Days left: {donation.daysLeft}</Text>
      </View>

      <View style={styles.fundraiserBox}>
        <Text style={{fontWeight: "bold", fontSize: 18, marginBottom: 15}}>Fundraiser</Text>
        <Text style={styles.organization}>{donation.organization}</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${progress}%` }]}/>
          <Text style={styles.progressText}>{progress.toFixed(2)}% Raised</Text>
        </View>
        <Button title="Donate" onPress={() => {}} style={styles.donateButton} />
      </View>
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
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 20
  },
  description: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 10,
    fontWeight: "bold"
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
  },
  details: {
    padding: 10,
  },
  firstrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginLeft: 70
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  halfRow: {
    flex: 1,
    fontSize: 16,
    marginBottom: 15
  },
  fundraiserBox: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#ddd',
    margin: 10,
    backgroundColor: '#FFFFED',
    borderRadius: 10
  },
  organization: {
    fontSize: 18
  },
  progressBarContainer: {
    flex: 3,
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  progressBar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#4caf50',
  },
  progressText: {
    textAlign: 'center',
  },
  donateButton: {
    flex: 1,
    marginHorizontal: 10,
  },
  readMoreText: {
    color: '#0066cc',
    padding: 10,
  },
});

export default DonationDetails;

