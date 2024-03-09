import React from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback, Animated } from 'react-native';


export default function Tile() {
  const scaleValue = React.useRef(new Animated.Value(1)).current;

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
        <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Animated.View style={[styles.card, { transform: [{ scale: scaleValue }] }]}>
      <Text style={styles.text}> Hellooooo </Text>
      </Animated.View>

    </TouchableWithoutFeedback>
    
    </View>

    
  );
}

const styles = StyleSheet.create({
    container:
    {
        flex:1,
        flexDirection: 'column',
        marginTop: 70,
        
        
    },
    text:
    {
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        alignSelf: 'flex-start'
        
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
    height: 100,
    width: 390,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    height: 80,
    width: 80,
  },
});
