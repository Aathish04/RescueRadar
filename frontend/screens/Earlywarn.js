import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MapView, { Marker, Circle } from 'react-native-maps';
import AlertInfo from '../Components/Alert';
import { useNavigation } from '@react-navigation/native';

export default function Earlywarn() {
  const [json_data, setJson] = useState(null);
  const [disaster, setdisaster] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null); // To store the selected region coordinates
  const navigation = useNavigation();

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
      console.log(data);
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
    // If JSON data is not available, return null
    return null;
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
          }}
        />
      ));
    }
    return null;
  }

  return (
    <View style={styles.container}>
      {json_data ? (
        <View style={{ flex: 1 }}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              ...fetchCoordinates(),
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          >
            {selectedRegion && ( // Render the polygon if a region is selected
               <Circle
               center={{
                 latitude: parseFloat(disaster.centroid.split(",")[1]),
                 longitude: parseFloat(disaster.centroid.split(",")[0])
               }}
               radius={parseFloat(disaster.area_covered)} // Adjust the radius as needed
               fillColor={disaster.severity_color} // Use the severity color as the fill color
               strokeWidth={0} // Set the border width to 0 to hide it
             />
            )}
            {renderMarkers()}
          </MapView>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              navigation.goBack();
            }}>
            <Ionicons name="arrow-back-outline" size={32} color="white" />
          </TouchableOpacity>
          <View style={styles.warningIndicator} />
        </View>
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
      <View style={styles.footer}>
        {disaster ? <AlertInfo data={disaster} /> : <ActivityIndicator size="large" color="#0000ff" />}
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
});
