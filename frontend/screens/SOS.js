import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';

const CallEmergencyNumber = () => {

  const emergencyNumbers = [
    { title: 'Ambulance', number: '102' },
    { title: 'Fire', number: '101' },
    { title: 'Police', number: '101' },
    { title: 'Disaster Management Services', number: '108' },
    { title: 'Women Helpline', number: '1091' },
    { title: 'Women Helpline - Domestic Abuse', number: '181' },
    { title: 'Air Ambulance', number: '9540161344' },
    { title: 'Aids Helpline', number: '1097' },
    { title: 'Anti Poison New Delhi', number: '1066' },
    { title: 'Disaster Management N.D.M.A', number: '011-26701728-1078' },
    { title: 'EARTHQUAKE / FLOOD / DISASTER N.D.R.F', number: '011-24363260' },
    { title: 'Deputy Commissioner Of Police - Missing Child And Women', number: '1094' },
    { title: 'Railway Enquiry', number: '139' },
    { title: 'Senior Citizen Helpline', number: '1091/1291' },
    { title: 'Medical Helpline', number: '108' },
    { title: 'Railway Accident Emergency Service', number: '1072' },
    { title: 'Road Accident Emergency Service', number: '1073' },
    { title: 'Road Accident Emergency Service On National Highway For Private Operators', number: '1033' },
    { title: 'ORBO Centre, AIIMS (For Donation Of Organ) Delhi', number: '1060' },
    { title: 'Call Centre', number: '1551' },
    { title: 'Relief Commissioner For Natural Calamities', number: '1070' },
    { title: 'Children In Difficult Situation', number: '1098' },
    { title: 'Central Vigilance Commission', number: '1964' },
    { title: 'Tourist Helpline', number: '1363/1800111363' },
    { title: 'LPG Leak Helpline', number: '1906' },
  ];

  const handleCall = (number) => {
    Linking.openURL(`tel:${number}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {emergencyNumbers.map((emergency, index) => (
        <TouchableOpacity key={index} style={styles.button} onPress={() => handleCall(emergency.number)}>
          <Text style={styles.buttonText}>{emergency.title}</Text>
          <Text style={styles.buttonNumber}>{emergency.number}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 50,
    paddingBottom: 100,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Background color for the container
    paddingVertical: 20, // Add some padding for better spacing
  },
  button: {
    backgroundColor: '#FF5733',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 20,
    alignItems: 'center',
    width: '80%', // Adjust the width of the button
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    alignSelf: 'center',

  },
  buttonNumber: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default CallEmergencyNumber;
