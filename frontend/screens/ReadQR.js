import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Camera } from 'expo-camera';

export default function ReadQR() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState("");
  const [decryptData, setDecryptData] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  useEffect(() => {
    if (decryptData) {
      // Alert or display the decrypted data after it's updated.
      alert(`Decrypted data: ${decryptData}`);
    }
  }, [decryptData]); // This useEffect reacts to changes in decryptData

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setData(data);
    
    handleDecryptRequest(data);
  };

  const handleDecryptRequest = async (data) => {
    try {
      const response = await fetch('https://839e-2405-201-e013-b01a-6698-fa8c-d850-b0c3.ngrok-free.app/decrypt/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ encrypted_data: data }),
      });

      if (!response.ok) {
        throw new Error('Failed to send decrypt request');
      }

      const responseData = await response.json();
      setDecryptData(responseData.decrypted_text);      
    } catch (error) {
      console.error('Error sending decrypt request:', error.message);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Camera 
        style={{ height: 300, width: 300 }} 
        type={type}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            justifyContent: 'space-around',
            margin: 20,
          }}>
          {/* Button can be re-enabled if needed */}
        </View>
      </Camera>
      {scanned && <Text>Scanned Data: {data}</Text>}
      {/* Optionally display decrypted text directly in the UI */}
      {decryptData && <Text>Decrypted Text: {decryptData}</Text>}
    </View>
  );
}
