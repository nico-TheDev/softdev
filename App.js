import "react-native-gesture-handler";
// FONTS
import { useFonts } from "expo-font";

import React, { useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// IMPORT SCREENS HERE
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import ResultsScreen from "./src/screens/ResultsScreen";

// IMPORT UTILS

const Stack = createStackNavigator();

export default function App() {
    const [loaded] = useFonts({
        "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
        "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
        "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
        "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    });

    if (!loaded) {
        return (
            <View>
                <Text>Loading Fonts</Text>
            </View>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: "Home" }}
                />
                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{ title: "Profile" }}
                />
                <Stack.Screen
                    name = "Results"
                    component = {ResultsScreen}
                    options = {{ title: "Results" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
