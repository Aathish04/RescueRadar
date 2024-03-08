import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import Button from '../components/Button';

const Welcome = ({ navigation }) => {

    return (
        <LinearGradient
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
            colors={[COLORS.secondary, COLORS.primary]}
        >
            <Image
                source={require("../assets/welcome.png")}
                style={{
                    height: 250,
                    width: 300,
                    borderRadius: 20,
                    position: "absolute",
                    top: 100
                }}
            />

            {/* content  */}

            <View style={{
                paddingHorizontal: 22,
                position: "absolute",
                bottom: 70,
                width: "100%",
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 50,
                    fontWeight: 'bold',
                    color: COLORS.white,
                    textAlign: 'center'
                }}>Rescue Radar</Text>
                <Text style={{
                        fontSize: 18,
                        color: COLORS.white,
                        textAlign: 'center'
                    }}>Shielding Communities, Saving Lives</Text>

                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 18,
                        color: COLORS.white,
                        textAlign: 'center'
                    }}>Let's get started!</Text>
                </View>

                <Button
                    title="Join Now"
                    onPress={() => navigation.navigate("Signup")}
                    style={{
                        marginTop: 20,
                        width: "100%"
                    }}
                />

                <View style={{
                    flexDirection: "row",
                    marginTop: 12,
                    justifyContent: "center"
                }}>
                    <Text style={{
                        fontSize: 16,
                        color: COLORS.white
                    }}>Already have an account? </Text>
                    <Pressable
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white,
                            fontWeight: "bold",
                            marginLeft: 4
                        }}>Login</Text>
                    </Pressable>
                </View>
            </View>
        </LinearGradient>
    )
}

export default Welcome
