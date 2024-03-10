import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import DonationCard from '../Components/DonationCard';
import donationData from '../data/DonationData.json';
import COLORS from '../constants/colors';
import { LinearGradient } from "expo-linear-gradient";
import SearchBar from '../Components/SearchBar';

// Mock data for category images, replace 'require' with actual paths or use { uri: 'remote-url' } for remote images
const categoryImages = [
  { src: require('../assets/donations/donation.png'), caption:'Users' },
  { src: require('../assets/donations/ngo.png'), caption: 'NGOs'},
  { src: require('../assets/donations/govt.png'), caption: 'Govt'},
  { src: require('../assets/donations/see-all.png'), caption: 'See all' },
];

function getImageForTitle(title) {
    const keywordsToImages = {
      'flood': require('../assets/donations/flood.jpg'),
      'cyclone': require('../assets/donations/cyclone.png'),
      'earthquake': require('../assets/donations/earthquake.jpeg'),
      'drought': require('../assets/donations/drought.jpeg'),
      'landslide': require('../assets/donations/landslide.jpeg'),
      'tsunami': require('../assets/donations/tsunami.jpg'),
      'heatwave': require('../assets/donations/heatwave.jpeg'),
      'pandemic': require('../assets/donations/pandemic.jpg'),
      'locust': require('../assets/donations/locusts.jpeg'),
      'hailstorm': require('../assets/donations/hailstorm.jpeg'),
      'firefighting': require('../assets/donations/firefighting.jpeg'),
    };
  
    // Default image if no keyword matches
    const defaultImage = require('../assets/donations/donation.png');
  
    // Convert title to lowercase to make the search case-insensitive
    const lowerCaseTitle = title.toLowerCase();
  
    // Search for keyword in title and return corresponding image
    for (const keyword in keywordsToImages) {
      if (lowerCaseTitle.includes(keyword)) {
        return keywordsToImages[keyword];
      }
    }
  
    // Return default image if no keywords match
    return defaultImage;
  }
  
  const mappedData = donationData.map((item) => {
    return { ...item, image: getImageForTitle(item.title) };
  });


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

        <TouchableOpacity
        onPress={() => navigation.navigate('CreateFundraiser')}
        style={styles.openFundButton}>
        <Text style={styles.openFundButtonText}>Open a Fund, Ignite Impact</Text>
        </TouchableOpacity>

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
      {mappedData.map((donation, index) => (
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
  openFundButton: {
    backgroundColor: COLORS.primary, // Choose an appropriate color
    padding: 15,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
  },
  openFundButtonText: {
    color: 'white', // Adjust based on your background color
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});

export default DonationHome;

