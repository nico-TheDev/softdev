import React from "react";
import { TouchableHighlight, View, Text } from "react-native";

import styles from "../styles/styleButton";

export default function Button() {
    const handlePress = () => {};

    return (
        <TouchableHighlight onPress={handlePress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>FIND</Text>
            </View>
        </TouchableHighlight>
    );
}
