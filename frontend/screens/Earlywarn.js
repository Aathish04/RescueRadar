import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function Earlywarn() {
  const [json_data, setJson] = useState(null);

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

  return (
    <View style={styles.container}>
      {json_data ? (
        <View style={{height: 600}}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            ...fetchCoordinates(),
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          <Marker
            coordinate={fetchCoordinates()}
            title="Marker Title"
            description="Marker Description"
          />
        </MapView>
        </View>
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  }
});
