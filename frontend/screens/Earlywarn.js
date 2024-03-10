import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, View, ActivityIndicator, Text, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MapView, { Marker, Circle } from 'react-native-maps';
import AlertInfo from '../Components/Alert';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import Slider from '@react-native-community/slider';

export default function Earlywarn() {
  const [json_data, setJson] = useState(null);
  const [disaster, setdisaster] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null); // To store the selected region coordinates
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [threshold, setThreshold] = useState(10); // Initial threshold value
  const pulseAnimation = React.useRef(new Animated.Value(1)).current;

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  useEffect(() => {
    getJson();
  }, []);

  async function getJson() {
    try {
      const response = await fetch('https://sachet.ndma.gov.in/cap_public_website/FetchAllAlertDetails', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Length': '0'
        }
      });
      const data = await response.json();
      setJson(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  function fetchCoordinates() {
    if (json_data && json_data.length > 0) {
      const entry = json_data[0].centroid.split(",");
      return {
        latitude: parseFloat(entry[1]),
        longitude: parseFloat(entry[0])
      };
    }
    return null;
  }

  // Function to calculate distance between two coordinates
  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180); // Convert degrees to radians
    const dLon = (lon2 - lon1) * (Math.PI / 180); // Convert degrees to radians
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
  }

  function findCloseDisasters(currentLat, currentLon, disasters) {
    const closeDisasters = [];
    disasters.forEach((disaster) => {
      const distance = calculateDistance(currentLat, currentLon, parseFloat(disaster.centroid.split(",")[1]), parseFloat(disaster.centroid.split(",")[0]));
      if (distance <= threshold) { // Filter disasters within the threshold distance
        closeDisasters.push({ ...disaster, distance }); // Add disaster with distance to the list
      }
    });
    return closeDisasters;
  }

  function renderMarkers() {
    if (json_data) {
      return json_data.map((entry, index) => (
        <Marker
          key={index}
          coordinate={{
            latitude: parseFloat(entry.centroid.split(",")[1]),
            longitude: parseFloat(entry.centroid.split(",")[0])
          }}
          title={entry.severity}
          description={entry.disaster_type}
          onPress={() => {
            setdisaster(entry);
            setSelectedRegion({ // Set the selected region coordinates
              latitude: parseFloat(entry.centroid.split(",")[1]),
              longitude: parseFloat(entry.centroid.split(",")[0])
            });

            console.log(findCloseDisasters(parseFloat(location.coords.latitude), parseFloat(location.coords.longitude),json_data))
          }}
          pinColor={entry.severity_color}
        />
      ));
    }
    return null;
  }

  function startPulseAnimation() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnimation, {
          toValue: 1.0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnimation, {
          toValue: 0.0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnimation, {
          toValue: 1.0,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }

  useEffect(() => {
    if (location) {
      startPulseAnimation();
    }
  }, [location]);

  return (
    <View style={styles.container}>
      {json_data ? (
        <View style={{ flex: 1 }}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              ...fetchCoordinates(),
              latitudeDelta: 30,
              longitudeDelta: 30
            }}
          >
            {selectedRegion && (
              <Circle
                center={{
                  latitude: parseFloat(disaster.centroid.split(",")[1]),
                  longitude: parseFloat(disaster.centroid.split(",")[0])
                }}
                radius={parseFloat(disaster.area_covered)}
                fillColor={disaster.severity_color}
                strokeWidth={0}
              />
            )}
            {location && (
  <Circle
    center={{
      latitude: parseFloat(location.coords.latitude),
      longitude: parseFloat(location.coords.longitude)
    }}
    radius={threshold*1000}
    fillColor="rgba(0, 0, 255, 0.3)" // Set the fillColor with an alpha value for translucency
    strokeWidth={0}
  />
)}

            {renderMarkers()}
            {location && (
              <Marker
                coordinate={{
                  latitude: parseFloat(location.coords.latitude),
                  longitude: parseFloat(location.coords.longitude)
                }}
              >
                <Animated.View
                  style={[
                    styles.pulseIndicator,
                    {
                      transform: [
                        {
                          scale: pulseAnimation,
                        },
                      ],
                    },
                  ]}
                />
              </Marker>
            )}

          </MapView>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons name="arrow-back-outline" size={32} color="white" />
          </TouchableOpacity>
          <View style={styles.warningIndicator} />
        </View>
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
      <View style={styles.footer}>
        {disaster ? <AlertInfo data={disaster} /> : <ActivityIndicator size="large" color="#ffffff" />}
      </View>
      <View style={{backgroundColor: 'white'}}>
      <Slider
  style={{ width: '80%', alignSelf: 'center', backgroundColor: 'white' }}
  minimumValue={1}
  maximumValue={2000}
  minimumTrackTintColor="#000000"
  maximumTrackTintColor="#000000"
  step={50}
  value={threshold}
  onValueChange={setThreshold}
  onSlidingComplete={(value) => {
    Animated.timing(pulseAnimation, {
      toValue: 1.0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setThreshold(value); // Update the threshold value after animation completes
      startPulseAnimation(); // Restart the pulse animation
    });
  }}
/>

      <Text style={{ alignSelf: 'center'}}>Threshold: {threshold} km</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  footer: {
    backgroundColor: 'white',
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 10,
    backgroundColor: '#112A46',
    borderRadius: 20,
    padding: 10,
  },
  pulseIndicator: {
    width: 20,
    height: 20,
    borderRadius: 100,
    backgroundColor: 'black', // Set the background color to transparent
    borderColor: '#fff', // Set the border color to white
    borderWidth: 5, // Set the border width
    opacity: 0.9, // Adjust the opacity as needed
  },
});
