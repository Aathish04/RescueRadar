// import React from 'react';
// import { ScrollView, StyleSheet, View, Text, Image, Button } from 'react-native';

// const Donate = ({ route }) => {
//   const { donation } = route.params;

//   return (
//     <ScrollView style={styles.container}>
//       <Image style={styles.image} source={donation.image} />
//       <Text style={styles.title}>{donation.title}</Text>
//       <Text style={styles.details}>Categories: {donation.categories}</Text>
//       <Text style={styles.details}>Days left: {donation.daysLeft}</Text>
//       <View style={styles.donationStatus}>
//         <Text style={styles.amountRaised}>${donation.amountRaised}</Text>
//         <Text style={styles.target}>/${donation.target}</Text>
//       </View>
//       {/* Add a progress bar component here */}
//       <Button title="Donate" onPress={() => {}} />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     width: '100%',
//     height: 300,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     padding: 10,
//   },
//   details: {
//     padding: 10,
//   },
//   donationStatus: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,
//   },
//   amountRaised: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   target: {
//     fontSize: 18,
//   },
//   // Add styles for your button and progress bar
// });

// export default Donate;

import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import COLORS from '../constants/colors';


const DonateScreen = ({ route }) => {
  const [amount, setAmount] = useState('');
  const { donation } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Donate Securely</Text>
      <Image source={require('../assets/donations/shield.png')} style={styles.icon} />
      <View style={styles.thankYouContainer}>
        <Text style={styles.thankYouText}>Thank you</Text>
        <Image source={require('../assets/donations/heart.png')} style={styles.heartIcon} />
      </View>
      {/* <TextInput
        style={styles.input}
        onChangeText={setAmount}
        value={amount}
        placeholder="Enter amount"
        keyboardType="numeric"
      /> */}
      <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingLeft: 22,
                        marginTop: 20,
                        marginBottom: 25
                    }}>
                        <TextInput
                            placeholder='Rs. '
                            placeholderTextColor={COLORS.black}
                            keyboardType='numeric'
                            style={{
                                width: "12%",
                                borderRightWidth: 1,
                                borderLeftColor: COLORS.grey,
                                height: "100%"
                            }}
                        />

                        <TextInput
                            placeholder='Enter amount'
                            placeholderTextColor={COLORS.black}
                            keyboardType='numeric'
                            style={{
                                width: "80%"
                            }}
                        />
                    </View>
      <Text style={styles.donateWithText}>Donate with</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}><Text>UPI/BHIM</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text>Credit Card/Debit Card</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text>RazorPay</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text>NET Banking</Text></TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    marginTop: 70
  },
  icon: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  thankYouContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  thankYouText: {
    fontSize: 18,
    marginRight: 5,
  },
  heartIcon: {
    width: 24,
    height: 24,
  },
  input: {
    height: 40,
    width: '100%',
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#cccccc',
  },
  donateWithText: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    margin: 5,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DonateScreen;

