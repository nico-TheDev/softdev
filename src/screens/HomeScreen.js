import React, { useState, useEffect } from "react";
import { Text, View, ImageBackground, Button } from "react-native";

import dummyData from "../data";
import bgOne from "../img/bg-1.png";
import homeStyle from "../styles/styleHome";

// IMPORT COMPONENTS
import Search from "../components/Search";
import Suggestion from "../components/Suggestion";

const HomeScreen = ({ navigation }) => {
    const [profList, setprofList] = useState(null);

    // MIMICS AN API CALL

    useEffect(() => {
        setTimeout(() => {
            setprofList(dummyData.profs);
        }, 1000);
    }, []);

    return (
        <ImageBackground
            source={bgOne}
            style={homeStyle.background}
            resizeMode="cover"
        >
            <View style={homeStyle.container}>
                <Search />
                <Suggestion profList={profList} />
            </View>
        </ImageBackground>
    );
};

export default HomeScreen;
