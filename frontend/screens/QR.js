// import React, { useState } from 'react';
// import { View, TextInput, Button, Text } from 'react-native';
// import QRCode from 'react-native-qrcode-svg';

// export default function QR() {
//   const [originalData, setOriginalData] = useState("facebook.com");
//   const [encryptData, setEncryptData] = useState("");
//   const [decryptData, setDecryptData] = useState("");

//   const handleEncryptRequest = async () => {
//     try {
//       const response = await fetch('https://839e-2405-201-e013-b01a-6698-fa8c-d850-b0c3.ngrok-free.app/encrypt/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ plain_text: originalData }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to send encrypt request');
//       }

//       const responseData = await response.json();
//       console.log('Encrypt Response:', responseData);
//       setEncryptData(responseData.encrypted_data);
     
//     } catch (error) {
//       console.error('Error sending encrypt request:', error.message);
//     }
//   };

//   const handleDecryptRequest = async () => {
//     try {
//       const response = await fetch('https://839e-2405-201-e013-b01a-6698-fa8c-d850-b0c3.ngrok-free.app/decrypt/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ encrypted_data: encryptData }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to send decrypt request');
//       }

//       const responseData = await response.json();
//       console.log('Decrypt Response:', responseData);
//       setDecryptData(responseData.decrypted_text);
          
//     } catch (error) {
//       console.error('Error sending decrypt request:', error.message);
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <TextInput
//         style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
//         placeholder="Enter sample string"
//         onChangeText={text => setOriginalData(text)}
//         value={originalData}
//       />
//       <Button
//         title="Encrypt Text"
//         onPress={handleEncryptRequest}
//       />
//       <Button
//         title="Decrypt Text"
//         onPress={handleDecryptRequest}
//       />
//       {
//         decryptData ? 
//           <View>
//             <Text>Decrypted Text:</Text>
//             <Text>{decryptData}</Text>
//             <QRCode value={decryptData} size={200} />
//           </View>
//           : null 
//       }
//     </View>
//   );
// }
// 7