import React from "react";
import { View, Text, ImageBackground, ScrollView, Image } from "react-native";

import bgOne from "../img/bg-1.png";
import homeStyle from "../styles/styleHome";
import map from "../img/map.png"
import mapStyle from "../styles/styleMap"

const MapScreen = () => {
    return (
        <ImageBackground
            source={bgOne}
            style={homeStyle.background}
            resizeMode="cover"
        >
            <View style={homeStyle.container}></View>

            <ScrollView
                horizontal = {true}
                style = {{height: "30%", width: "100%" }}
                
            >
                <ScrollView>
                    <Image
                    source = {map}
                    style = {mapStyle.map}
                    />
                </ScrollView>
            </ScrollView>

            <View style = {{ flex: 1 }}>
                <Text style = {mapStyle.roomsHeader}>Rooms</Text>

                <Text style = {mapStyle.roomsText}>301 - Computer Lab 1</Text>
                <Text style = {mapStyle.roomsText}>302 - Computer Lab 2</Text>
                <Text style = {mapStyle.roomsText}>303 - Computer Lab 3</Text>
                
                <Text style = {mapStyle.facultyHeader}>Faculty</Text>
            
                <Text style = {mapStyle.facultyText}>311 - Dela Cruz, Cena, Gamora, Jaeger</Text>
                <Text style = {mapStyle.facultyText}>312 - Dela Cruz, Cena, Gamora, Jaeger</Text>
            </View>
        </ImageBackground>
    );
};

export default MapScreen;
