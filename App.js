import "react-native-gesture-handler";
// FONTS
import { useFonts } from "expo-font";

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "react-native-elements";

// IMPORT SCREENS HERE
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import ResultsScreen from "./src/screens/ResultsScreen";
import MapScreen from "./src/screens/MapScreen";

// IMPORT UTILS

const Stack = createStackNavigator();

const Map = ({ navigation }) => {
    return (
        <TouchableOpacity
            style={{ marginRight: 10 }}
            onPress={() => navigation.navigate("Map")}
        >
            <Icon name="map" type="font-awesome-5" color="#000" />
        </TouchableOpacity>
    );
};

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
                    options={({ navigation }) => ({
                        title: "Home",
                        headerRight: () => <Map navigation={navigation} />,
                    })}
                />
                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={({ navigation }) => ({
                        title: "Profile",
                        headerRight: () => <Map navigation={navigation} />,
                    })}
                />
                <Stack.Screen
                    name="Results"
                    component={ResultsScreen}
                    options={({ navigation }) => ({
                        title: "Results",
                        headerRight: () => <Map navigation={navigation} />,
                    })}
                />
                <Stack.Screen
                    name="Map"
                    component={MapScreen}
                    options={{ title: "CPE Map" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
