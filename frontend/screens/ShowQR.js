import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Text ,ActivityIndicator} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function ShowQR() {
  const [originalData, setOriginalData] = useState("facebook.com");
  const [encryptData, setEncryptData] = useState("");

  useEffect(() =>
  {
    handleEncryptRequest();

  },[]);

  const handleEncryptRequest = async () => {
    try {
      const response = await fetch('https://839e-2405-201-e013-b01a-6698-fa8c-d850-b0c3.ngrok-free.app/encrypt/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ plain_text: originalData }),
      });

      if (!response.ok) {
        throw new Error('Failed to send encrypt request');
      }

      const responseData = await response.json();
      console.log('Encrypt Response:', responseData);
      setEncryptData(responseData.encrypted_data);
     
    } catch (error) {
      console.error('Error sending encrypt request:', error.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

     
      {
    
          <View>
            <Text>Encrypted Information:</Text>
            <Text>{encryptData}</Text>
            {encryptData?
                  <QRCode value={encryptData} size={300} /> : <ActivityIndicator size="large" color="#ffffff" /> }
          </View>
        
      }
    </View>
  );
}
7