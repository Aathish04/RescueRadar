import { StyleSheet, View, Text, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.header}>
      <Pressable onPress={() => { console.log("Hello")}} >
        <Ionicons name="arrow-back-outline" size={32} color="white" />
      </Pressable>

      <Pressable onPress={() => { console.log("Settings")}}>
        <Ionicons name="settings-outline" size={32} color="white" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',

    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between', // Align items horizontally with space between
    paddingHorizontal: 20, // Add some horizontal padding
    alignItems: 'center' // Center items vertically
  },
});
