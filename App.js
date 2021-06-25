import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View, ImageBackground } from "react-native";

import dummyData from "./data";
import bgOne from "./src/img/bg-1.png";
import AppStyle from "./src/styles/styleApp";

export default function App() {
    const [profList, setprofList] = useState(null);

    // MIMICS AN API CALL

    useEffect(() => {
        setTimeout(() => {
            setprofList(dummyData.profs);
            console.log(profList);
        }, 1000);
    }, []);

    return (
        <ImageBackground
            source={bgOne}
            style={AppStyle.background}
            resizeMode="cover"
        >
            <View style={AppStyle.container}>
                <Text>Find your Professor</Text>
                <Text>Hello World!</Text>
                <StatusBar style="auto" />
            </View>
        </ImageBackground>
    );
}
