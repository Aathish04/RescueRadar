import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function AlertInfo({ data }) {


    const styles = StyleSheet.create({
        container: {
          backgroundColor: '#fff',
          padding: 10,
          borderRadius: 8,
          marginVertical: 5,
          borderWidth: 1,
          borderColor: '#ddd',
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
      <Text style={styles.title}>Disaster Type: {data.disaster_type}</Text>
      <Text style={styles.text}>Severity: {data.severity}</Text>
      <Text style={styles.text}>Effective Start Time: {data.effective_start_time}</Text>
      <Text style={styles.text}>Effective End Time: {data.effective_end_time}</Text>
      <Text style={styles.text}>Area Description: {data.area_description}</Text>
      <Text style={styles.text}>Severity Level: {data.severity_level}</Text>
      <Text style={styles.text}>Warning Message: {data.warning_message}</Text>
      <Text style={styles.text}>Alert Source: {data.alert_source}</Text>
      <Text style={styles.text}>Area Covered: {data.area_covered}</Text>
    </View>
  );

  
}

