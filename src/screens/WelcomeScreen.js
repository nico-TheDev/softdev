import React from "react";
import { Text, View, TouchableHighlight, Image } from "react-native";
import { useNavigation } from "@react-navigation/core";

import welcomeStyles from "../styles/styleWelcome";
import btnStyle from "../styles/styleButton";
import Time from "../img/time_management.svg";

const WelcomeScreen = () => {
    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate("Home");
    };
    return (
        <View style={welcomeStyles.container}>
            <View style={welcomeStyles.main}>
                <Text style={welcomeStyles.title}>CPE Bulletin Board</Text>
                <Time height={300} width={300} />
                <Text style={welcomeStyles.text}>
                    Start knowing the schedule of your professors
                </Text>
                <TouchableHighlight
                    onPress={handlePress}
                    style={welcomeStyles.btn}
                >
                    <View style={btnStyle.button}>
                        <Text
                            style={[btnStyle.buttonText, welcomeStyles.btnText]}
                        >
                            START FINDING
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    );
};

export default WelcomeScreen;
