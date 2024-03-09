import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';


export default function Earlywarn()
{
    const [json_data, setjson] = useState();
   
    useEffect( () => {
        
getJson();

    }, []);


    async function getJson()
    {
        try
        {
            const response = await fetch('https://sachet.ndma.gov.in/cap_public_website/FetchAllAlertDetails', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-Length': '0'
                }});
            const data = await response.json();
            console.log(data)
            setjson(data);

            //console.log(fetchCoordinates())
            //console.log(parseFloat(fetchCoordinates()[0]))
            
  }
catch (error)
{
   
    console.error('Error fetching data:', error);
}

    }

    function fetchCoordinates()
    {
        const entry = (json_data[0].centroid).split(",")
        console.log(entry)
        return entry
    }
  

    return( <View style= {styles.container}>
        <View>
        <MapView
        style={{ height: 600}}
        initialRegion={{
           latitude: parseFloat(fetchCoordinates()),
           longitude: parseFloat(fetchCoordinates()),
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          latitude: 100,
          longitude: 100,
        }}
      >
        <Marker
          coordinate={{ latitude: parseFloat(fetchCoordinates()[1]), longitude: parseFloat(fetchCoordinates()[0])}}
          title="Marker Title"
          description="Marker Description"
          //coordinate={{ latitude: 100, longitude: 100}}
        />
    
      </MapView>
        </View>


         <View style={styles.footer}>
        
         </View>
        

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