import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import DonationCard from '../components/DonationCard';
import donationData from '../data/donationData';
import COLORS from '../constants/colors';
import { LinearGradient } from "expo-linear-gradient";
import SearchBar from '../components/SearchBar';

// Mock data for category images, replace 'require' with actual paths or use { uri: 'remote-url' } for remote images
const categoryImages = [
  { src: require('../assets/donations/donation.png'), caption:'Users' },
  { src: require('../assets/donations/ngo.png'), caption: 'NGOs'},
  { src: require('../assets/donations/govt.png'), caption: 'Govt'},
  { src: require('../assets/donations/see-all.png'), caption: 'See all' },
];

const DonationHome = ({ navigation }) => {
  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        style={styles.linearGradient}
        colors={["#bfe9ff", COLORS.primary]}
      >
        <Text style={styles.title}>Donate Today, Transform Tomorrow</Text>
        <SearchBar
          clicked={clicked}
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          setClicked={setClicked}
          style={{marginLeft: 10}}
        />
        <Text style={styles.categoriesTitle}>Categories</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.imageRow}
        >
          {categoryImages.map((image, index) => (
            <View key={index} style={styles.imageCard}>
              <Image source={image.src} style={styles.cardImage} />
              <Text style={{marginLeft: 16}}>{ image.caption } </Text>
            </View>
          ))}
        </ScrollView>
      {donationData.map((donation, index) => (
        <TouchableOpacity key={index} onPress={() => navigation.navigate('DonationDetails', { donation })}>
          <DonationCard donation={donation} />
        </TouchableOpacity>
        
      ))}
    </LinearGradient>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  linearGradient: {
    flex: 1,
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    color: COLORS.black,
    marginLeft: 18,
    marginTop: 15,
    fontWeight: "bold"
  },
  categoriesTitle: {
    fontSize: 18,
    color: COLORS.black,
    marginLeft: 20,
    marginBottom: 20,
  },
  imageRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: "center"
  },
  imageCard: {
    marginRight: 10,
    borderRadius: 10,
    overflow: 'hidden',
    marginLeft: 20,
    backgroundColor: COLORS.primary,
    marginBottom: 15
  },
  cardImage: {
    width: 70, // Adjust the size accordingly
    height: 70,
    resizeMode: 'cover',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.black, // Assuming you have a 'black' defined in COLORS
  },
});

export default DonationHome;

