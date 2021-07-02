import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, ScrollView, Image } from "react-native";

import bgOne from "../img/bg-1.png";
import homeStyle from "../styles/styleHome";
import map from "../img/map.png";
import mapStyle from "../styles/styleMap";

const MapScreen = () => {
    const [isShown, setIsShown] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsShown(false);
        }, 2000);
    }, []);

    return (
        <ImageBackground
            source={bgOne}
            style={homeStyle.background}
            resizeMode="cover"
        >
            <View style={mapStyle.container}>
                <View style={mapStyle.border}>
                    <ScrollView horizontal={true} style={mapStyle.outerScroll}>
                        <ScrollView style={mapStyle.innerScroll}>
                            <View>
                                <Image source={map} />
                            </View>
                        </ScrollView>
                    </ScrollView>
                    {isShown && <Text style={mapStyle.drag}>Drag to see </Text>}
                </View>

                <ScrollView style={mapStyle.bottom}>
                    <Text style={mapStyle.roomsHeader}>Rooms</Text>

                    <Text style={mapStyle.roomsText}>301 - Computer Lab 1</Text>
                    <Text style={mapStyle.roomsText}>302 - Computer Lab 2</Text>
                    <Text style={mapStyle.roomsText}>303 - Computer Lab 3</Text>

                    <Text style={mapStyle.facultyHeader}>Faculty</Text>

                    <Text style={mapStyle.facultyText}>
                        311 - Dela Cruz, Cena, Gamora, Jaeger
                    </Text>
                    <Text style={mapStyle.facultyText}>
                        312 - Dela Cruz, Cena, Gamora, Jaeger
                    </Text>
                </ScrollView>
            </View>
        </ImageBackground>
    );
};

export default MapScreen;
