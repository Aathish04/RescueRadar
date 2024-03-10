import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function RescueInfo({ data }) {


    const styles = StyleSheet.create({
        container: {
          backgroundColor: '#fff',
          padding: 10,
          borderRadius: 8,
          marginVertical: 5,
          borderWidth: 1,
          borderColor: '#ddd',
          width: 385
        },
        title: {
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 5,
        },
        text: {
          fontSize: 16,
          marginBottom: 3,
        },
      
        warning:
        { 
          position: 'absolute',
          top: 20,
          right: 20,
          width: 20,
          height: 20,
          borderRadius: 10,
          backgroundColor: data.severity_color, // Default color, can be changed based on severity_color
        }
      });
      

  return (
    <View style={styles.container}>
        <View style={styles.warning} />
        <Text style={styles.title}>Rescue Operation</Text>
      <Text style={styles.text}>Rescue Operation ID: {data.userid}</Text>
      <Text style={styles.text}>Team Name: {data.teamname}</Text>
      <Text style={styles.text}>Status of Operation: {data.userstatus}</Text>
      <Text style={styles.text}>Locality: {data.locality}</Text>
      <Text style={styles.text}>Contact: {data.contact}</Text>
    </View>
  );

  
}

