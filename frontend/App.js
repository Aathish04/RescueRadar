import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homescreen from './screens/Homescreen';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, TransitionPresets } from '@react-navigation/native-stack';
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
        gestureEnabled: false,
      
      }}>


<Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name='Homescreen' component={Homescreen}/>
        <Stack.Screen name='Earlywarn' component={Earlywarn}/>
    


  

        </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});
