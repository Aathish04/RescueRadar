import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Alert } from 'react-native';
import COLORS from '../constants/colors';
import Button from '../components/Button';


const CreateFundraiser = ({ navigation }) => {
  const [fundraiserName, setFundraiserName] = useState('');
  const [personName, setPersonName] = useState('');
  const [description, setDescription] = useState('');
  const [daysLeft, setDaysLeft] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [amountRaised, setAmountRaised] = useState('');
  const [contact, setContact] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');

  const handleSubmit = () => {
    Alert.alert("Submission Received", "Your fundraiser request is now in queue for verification.");
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>Personal Details</Text>
      <View style={styles.section}>
        <Text style={styles.label}>Your Name</Text>
        <TextInput
          style={styles.input}
          value={personName}
          onChangeText={setPersonName}
          placeholder='Enter your name'
        />
      </View>

      <View style={styles.divider} />

      <Text style={styles.sectionTitle}>Fundraiser Details</Text>
      <View style={styles.section}>
        <Text style={styles.label}>Name of the Fundraiser</Text>
        <TextInput
          style={styles.input}
          value={fundraiserName}
          onChangeText={setFundraiserName}
          placeholder='Enter Fundraiser Title'
        />
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={description}
          onChangeText={setDescription}
          multiline
          placeholder='Describe the cause in a few words....'
        />
        <Text style={styles.label}>Days Left</Text>
        <TextInput
          style={styles.input}
          value={daysLeft}
          onChangeText={setDaysLeft}
          keyboardType="numeric"
          placeholder='Enter number of days left to raise the mount'
        />
        <Text style={styles.label}>Target Amount</Text>
        <TextInput
          style={styles.input}
          value={targetAmount}
          onChangeText={setTargetAmount}
          keyboardType="numeric"
          placeholder='Enter target amount (Rs. )'
        />
        <Text style={styles.label}>Amount Raised As of Yet</Text>
        <TextInput
          style={styles.input}
          value={amountRaised}
          onChangeText={setAmountRaised}
          keyboardType="numeric"
          placeholder='Enter amount raised (Rs. )'
        />
        <Text style={styles.label}>Your Contact Information</Text>
        <TextInput
          style={styles.input}
          value={contact}
          onChangeText={setContact}
          placeholder='Enter your email'
        />
      </View>

      <View style={styles.divider} />

      <Text style={styles.sectionTitle}>Banking Details</Text>
      <View style={styles.section}>
      <Text style={styles.label}>Bank</Text>
        <TextInput
          style={styles.input}
          value={accountNumber}
          onChangeText={setAccountNumber}
          placeholder='Enter name of Bank'
        />
      <Text style={styles.label}>Branch</Text>
        <TextInput
          style={styles.input}
          value={accountNumber}
          onChangeText={setAccountNumber}
          placeholder='Enter branch of bank'
        />
        <Text style={styles.label}>Account Number</Text>
        <TextInput
          style={styles.input}
          value={accountNumber}
          onChangeText={setAccountNumber}
          placeholder='Enter your account number'
        />
        <Text style={styles.label}>IFSC Code</Text>
        <TextInput
          style={styles.input}
          value={ifscCode}
          onChangeText={setIfscCode}
          placeholder='Enter your IFSC Code'
        />
      </View>
      <Button title="Submit Fundraiser" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
    paddingBottom: 70
  },
  section: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: 'top'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: COLORS.primary
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
  },
});

export default CreateFundraiser;
