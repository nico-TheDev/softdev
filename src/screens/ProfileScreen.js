import React, { useState, useEffect } from "react";
import { Text, View, ImageBackground } from "react-native";

import bgTwo from "../img/bg-2.png";
import AppStyle from "../styles/styleApp";
import ProfileStyle from "../styles/styleHome";
import ProfileDetails from "../components/ProfileDetails";
import Schedule from "../components/Schedule";

const ProfileScreen = ({ route }) => {
    const { prof } = route.params;

    return (
        <ImageBackground
            source={bgTwo}
            style={AppStyle.background}
            resizeMode="cover"
        >
            <View style={ProfileStyle.container}>
                <ProfileDetails prof={prof} />
                <Schedule schedule={prof.schedule} />
            </View>
        </ImageBackground>
    );
};

export default ProfileScreen;
