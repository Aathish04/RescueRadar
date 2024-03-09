// import React, { useState } from 'react';
// import { StyleSheet, View, Text, Image, TouchableWithoutFeedback, Animated } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// export default function Card({ imgsrc }) {
//   const navigation = useNavigation();
//   const [animatedValues, setAnimatedValues] = useState([
//     new Animated.Value(1), // For the first tile
//     new Animated.Value(1), // For the second tile
//     new Animated.Value(1), // For the third tile
//     new Animated.Value(1)  // For the fourth tile
//   ]);

//   const handlePressIn = (index) => {
//     Animated.spring(animatedValues[index], {
//       toValue: 0.95,
//       useNativeDriver: true,
//     }).start();
//   };

//   const handlePressOut = (index) => {
//     Animated.spring(animatedValues[index], {
//       toValue: 1,
//       friction: 3,
//       tension: 40,
//       useNativeDriver: true,
//     }).start();
//   };

 
//   return (
//     <View style={styles.container}>
//       <View style={styles.inside_container}>
//         <TouchableWithoutFeedback
//           onPressIn={() => handlePressIn(0)}
//           onPressOut={() => handlePressOut(0)}
//           onPress={() => { }}>
//           <Animated.View style={[styles.card, { transform: [{ scale: animatedValues[0] }] }]}>
//             <Image style={styles.icon} source={require('../assets/sos.png')} />
//           </Animated.View>
//         </TouchableWithoutFeedback>
//         <TouchableWithoutFeedback
//           onPressIn={() => handlePressIn(1)}
//           onPressOut={() => handlePressOut(1)}
//           onPress={() => {
//             navigation.navigate('Earlywarn'); // Navigate to Earlywarn screen or whatever screen you desire
          
//         }}>
//           <Animated.View style={[styles.card, { transform: [{ scale: animatedValues[1] }] }]}>
//             <Image style={styles.icon} source={require('../assets/warning-sign.png')} />
//           </Animated.View>
//         </TouchableWithoutFeedback>
//       </View>
//       <View style={styles.inside_container}>
//         <TouchableWithoutFeedback
//           onPressIn={() => handlePressIn(2)}
//           onPressOut={() => handlePressOut(2)}>
//           <Animated.View style={[styles.card, { transform: [{ scale: animatedValues[2] }] }]}>
//             <Image style={styles.icon} source={require('../assets/barter.png')} />
//           </Animated.View>
//         </TouchableWithoutFeedback>
//         <TouchableWithoutFeedback
//           onPressIn={() => handlePressIn(3)}
//           onPressOut={() => handlePressOut(3)}>
//           <Animated.View style={[styles.card, { transform: [{ scale: animatedValues[3] }] }]}>
//             <Image style={styles.icon} source={require('../assets/donation.png')} />
//           </Animated.View>
//         </TouchableWithoutFeedback>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//   },
//   inside_container: {
//     flexDirection: 'row',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 1, height: 1 },
//     shadowOpacity: 0.3,
//     shadowRadius: 2,
//     marginVertical: 10,
//     marginHorizontal: 20,
//     padding: 10,
//     height: 150,
//     width: 170,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   icon: {
//     height: 80,
//     width: 80,
//   },
// });

// Card.js

import React from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback, Animated } from 'react-native';

const Card = ({ imgSrc, onPress }) => {
  const scaleValue = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut} onPress={onPress}>
        <Animated.View style={[styles.card, { transform: [{ scale: scaleValue }] }]}>
          <Image style={styles.icon} source={imgSrc} />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    height: 150,
    width: 170,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 80,
    width: 80,
  },
});

export default Card;

