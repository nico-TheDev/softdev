import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "../styles/styleProfileCard";

export default function ProfileCard({ prof }) {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate("Profile", { prof });
    };

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.card}>
                <Image style={styles.img} source={prof.image} />
                <Text style={styles.name}>{prof.name}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}
