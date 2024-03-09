import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';

export default function Earlywarn() {
  const [json_data, setjson] = useState(null);

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
          setjson(data);
          console.log(data);
          console.log(fetchCoordinates());
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
      return null; // Return null if JSON data is not available
  }

  return (
      <View style={styles.container}>
          {json_data ? (
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
          ) : (
              <ActivityIndicator size="large" color="#0000ff" />
          )}
          <View style={styles.footer}></View>
      </View>
  );
}


const styles = StyleSheet.create({
    container:
    {
        flex:1,
        flexDirection: 'column',
        backgroundColor: 'black',
        height: 300,

        
        
    },

  icon: {
    height: 80,
    width: 80,
  },
  footer:
  {
    backgroundColor: 'blue'
  }
});