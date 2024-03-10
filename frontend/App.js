import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './screens/Homescreen';
import Earlywarn from './screens/Earlywarn';
import { Login, Signup, Welcome } from "./screens";
import DonationHome from './screens/DonationHome';
import DonationDetails from './screens/DonationDetails';
import Donate from './screens/Donate'
import CreateFundraiser from './screens/CreateFundraiser';
import GovtLogin from './screens/GovtLogin'
import RescueActivitiesTracking from './screens/RescueActivitiesTracking';
import GovtHome from './screens/GovtHome'


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
        <Stack.Screen 
          name='Homescreen' 
          component={Homescreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name='Earlywarn' component={Earlywarn}/>
        <Stack.Screen name='DonationHome' component={DonationHome}/>
        <Stack.Screen name='DonationDetails' component={DonationDetails}/>
        <Stack.Screen name='Donate' component={Donate}/>
        <Stack.Screen name="CreateFundraiser" component={CreateFundraiser} />
        <Stack.Screen name='GovtLogin' component={GovtLogin}/>
        <Stack.Screen name='RescueActivitiesTracking' component={RescueActivitiesTracking} />
        <Stack.Screen name='GovtHome' component={GovtHome} />

  

        </Stack.Navigator>
   </NavigationContainer>
  );
}
