import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, Text, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MapView, { Marker, Circle } from 'react-native-maps';
import RescueInfo from '../Components/Rescue'; // Ensure this component is correctly implemented
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import Slider from '@react-native-community/slider';

import rescueOperations from '../data/RescueOperations.json';


export default function RescueActivitiesTracking() {

  const [json_data] = useState(rescueOperations);
  const [disaster, setDisaster] = useState(null);
  const [location, setLocation] = useState(null);
  const [threshold, setThreshold] = useState(1000); // Initial threshold in kilometers
  const pulseAnimation = React.useRef(new Animated.Value(1)).current;
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

     
      

      

    })();
  }, []);

  useEffect(() => {
    if (location) startPulseAnimation();
  }, [location]);

  function startPulseAnimation() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnimation, {toValue: 1.0, duration: 500, useNativeDriver: true}),
        Animated.timing(pulseAnimation, {toValue: 0.0, duration: 500, useNativeDriver: true}),
        Animated.timing(pulseAnimation, {toValue: 1.0, duration: 500, useNativeDriver: true}),
      ])
    ).start();
  }

  return (
    <View style={styles.container}>
      {json_data ? (
        <View style={{ flex: 1 }}>
          <MapView style={{ flex: 1 }} initialRegion={{
            latitude: 20.5937, longitude: 78.9629, latitudeDelta: 10, longitudeDelta: 10}}>
            {json_data.map((entry, index) => (
              <Marker
                key={index}
                coordinate={{latitude: entry.lat, longitude: entry.lon}}
                title={entry.teamname}
                description={`${entry.locality} - Contact: ${entry.contact}`}
                onPress={() => setDisaster(entry)}
                pinColor={entry.userstatus === "active" ? "green" : "gray"}
              />
            ))}
            {location && (
              <Circle
                center={{latitude: location.coords.latitude, longitude: location.coords.longitude}}
                radius={threshold * 1000} // Convert km to meters for the map visualization
                fillColor="rgba(0, 122, 255, 0.3)"
                strokeWidth={0}
              />
            )}
          </MapView>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={32} color="white" />
          </TouchableOpacity>
        </View>
      ) : <ActivityIndicator size="large" color="#0000ff" />}

      <View style={styles.footer}>
        {disaster ? <RescueInfo data={disaster} /> : <Text></Text>}
        <Slider
          style={{ width: '100%', height: 40, marginTop: 10 }}
          minimumValue={1} // 1 km
          maximumValue={2000} // 2000 km
          step={1}
          value={threshold}
          onValueChange={setThreshold}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
        />
        <Text style={{ alignSelf: 'center', marginTop: 10 }}>Threshold: {threshold} km</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
  footer: { padding: 20, backgroundColor: 'white', alignItems: 'center' },
  backButton: { position: 'absolute', top: 40, left: 10, backgroundColor: '#112A46', borderRadius: 20, padding: 10 },
  pulseIndicator: { width: 20, height: 20, borderRadius: 10, backgroundColor: 'rgba(0,122,255,0.5)', borderWidth: 2, borderColor: 'white', opacity: 0.9 },
});
