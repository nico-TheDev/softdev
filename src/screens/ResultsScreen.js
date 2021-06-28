import React, { useState, useEffect } from "react";
import { Text, View, ImageBackground, Button } from "react-native";

import dummyData from "../data";
import bgOne from "../img/bg-1.png";
import homeStyle from "../styles/styleHome";

// IMPORT COMPONENTS
import Search from "../components/Search";
import Suggestion from "../components/Suggestion";

const ResultsScreen = ({ navigation, route }) => {
    const [profList, setprofList] = useState(null);

    const [searchQuery, setQuery] = route.params;

    // MIMICS AN API CALL

    useEffect(() => {
        setTimeout(() => {
            setprofList(dummyData.profs);
        }, 1000);
    }, []);

    const [searchResults, setResults] = [...profList];

    for (let i = 0; i != searchResults.length; i++) {
        if (!searchResults[i].name.includes(searchQuery)) {
            const index = searchResults.indexOf(searchResults[i].name);
            searchResults.splice(index, 1);
        }
    }

    return (
        <ImageBackground
            source={bgOne}
            style={homeStyle.background}
            resizeMode="cover"
        >
            <View style={homeStyle.container}>
                <Search title="Find Your Professor" />
                <Suggestion
                    profList={searchResults}
                    isRandomized={false}
                    title="Search Results"
                />
            </View>
        </ImageBackground>
    );
};

export default HomeScreen;
