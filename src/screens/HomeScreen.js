import React, { useState, useEffect } from "react";
import { Text, View, ImageBackground, Button } from "react-native";
import { StackActions, CommonActions } from "@react-navigation/native";

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
        navigation.dispatch((state) => {
            // Remove the home route from the stack
            const routes = state.routes.filter((r) => r.name !== "Welcome");

            return CommonActions.reset({
                ...state,
                routes,
                index: routes.length - 1,
            });
        });

        setprofList(dummyData.profs);
    }, []);

    return (
        <ImageBackground
            source={bgOne}
            style={homeStyle.background}
            resizeMode="cover"
        >
            <View style={homeStyle.container}>
                <Search title="Find Your Professor" />
                <Suggestion
                    profList={profList}
                    isRandomized={true}
                    title="You May Know"
                />
            </View>
        </ImageBackground>
    );
};

export default HomeScreen;
