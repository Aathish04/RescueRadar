import React, {useState} from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';


const DonationDetails = ({ route }) => {
  const { donation } = route.params;
  const progress = (donation.amountRaised / donation.target) * 100;
  const navigation = useNavigation();

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

      <Text style={{marginLeft: 20}}>{'\u20A8'}. {donation.amountRaised} / {'\u20A8'}. {donation.target}</Text>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${progress}%` }]}/>
        <Text style={styles.progressText}>{progress.toFixed(2)}%   Raised</Text>
      </View>
      <Button
                    title="Donate"
                    onPress={() => navigation.navigate('Donate', { donation })}
                    style={{
                        marginTop: 20,
                        width: "100%"
                    }}
                />
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
    marginTop: 20,
    marginBottom: 20
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
  readMoreText: {
    color: '#0066cc',
    padding: 10,
  },
});

export default DonationDetails;

