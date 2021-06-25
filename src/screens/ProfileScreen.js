import React, { useState, useEffect } from "react";
import { Text, View, ImageBackground } from "react-native";

import dummyData from "../data";
import bgOne from "../img/bg-1.png";
import AppStyle from "../styles/styleApp";

const HomeScreen = () => {
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
                <Text>Search Results</Text>
                <Text>Tangina</Text>
            </View>
        </ImageBackground>
    );
};

export default HomeScreen;
