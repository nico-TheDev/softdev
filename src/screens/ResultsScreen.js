import React, { useState, useEffect } from "react";
import { Text, View, ImageBackground, Button } from "react-native";

import dummyData from "../data";
import bgOne from "../img/bg-1.png";
import homeStyle from "../styles/styleHome";

// IMPORT COMPONENTS
import Search from "../components/SearchTwo";
import ResultCards from "../components/ResultCards";

const ResultsScreen = ({ navigation, route }) => {
    const [searchResults, setSearchResults] = useState([...dummyData.profs]);
    const [searchQuery, setSearchQuery] = useState(route.params.searchQuery);

    // for (let i = 0; i < searchResults.length; i++) {
    //     if (!searchResults[i].name.includes(searchQuery)) {
    //         const index = searchResults.indexOf(searchResults[i].name);
    //         searchResults.splice(index, 1);
    //     }
    // }

    useEffect(() => {
        const arr = searchResults.filter((prof) =>
            prof.name.toLowerCase().includes(searchQuery)
        );
        console.log(arr);
        setSearchResults(arr);
    }, [searchQuery]);

    return (
        <ImageBackground
            source={bgOne}
            style={homeStyle.background}
            resizeMode="cover"
        >
            <View style={homeStyle.container}>
                <Search
                    title="Search Results"
                    query={searchQuery}
                    setQuery={setSearchQuery}
                    setSearchResults={setSearchResults}
                />
                <ResultCards
                    profList={searchResults}
                    title={`Results for: ${searchQuery}`}
                />
            </View>
        </ImageBackground>
    );
};

export default ResultsScreen;
