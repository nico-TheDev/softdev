import React from "react";
import { View, Text, ImageBackground } from "react-native";

import bgOne from "../img/bg-1.png";
import homeStyle from "../styles/styleHome";

const MapScreen = () => {
    return (
        <ImageBackground
            source={bgOne}
            style={homeStyle.background}
            resizeMode="cover"
        >
            <View style={homeStyle.container}></View>
        </ImageBackground>
    );
};

export default MapScreen;
