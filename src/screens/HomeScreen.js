import React, { useState, useEffect } from "react";
import { Text, View, ImageBackground, Button } from "react-native";

import dummyData from "../data";
import bgOne from "../img/bg-1.png";
import homeStyle from "../styles/styleHome";

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
                <Text style={homeStyle.mont}>Find your Professor</Text>
                <Text>Hello World!</Text>
                <Button
                    onPress={() => navigation.navigate("Profile")}
                    title="Find"
                />
            </View>
        </ImageBackground>
    );
};

export default HomeScreen;
