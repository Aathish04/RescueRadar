import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './screens/Homescreen';
import Earlywarn from './screens/Earlywarn';
import { Login, Signup, Welcome } from "./screens";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          animation: 'slide_from_right', // Custom slide animation
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name='Homescreen' component={Homescreen} />
        <Stack.Screen name='Earlywarn' component={Earlywarn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
