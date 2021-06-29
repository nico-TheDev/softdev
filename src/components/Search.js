import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity as Btn } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "../styles/styleSearch";
import Button from "./Button";
import ShowAlert from "./ShowAlert";

export default function Search({ title }) {
    // make use of useNavigation hook from react navigation
    const navigation = useNavigation();
    const [isAlertOpen, setIsAlertOpen] = useState(false);

    const [userInput, setUserInput] = useState("");

    const handleChangeText = (text) => setUserInput(text);

    const handleSubmit = (_) => {
        if (userInput != "") {
            navigation.navigate("Results", { searchQuery: userInput });
        } else {
            console.log("BLANK INPUT");
            setIsAlertOpen(true);
            // shit solution but working
            setTimeout(() => setIsAlertOpen(false), 2000);
        }
    };

    return (
        <View style={styles.container}>
            {isAlertOpen && (
                <Btn
                    style={{ height: 0, opacity: 0 }}
                    title=""
                    onPress={ShowAlert()}
                />
            )}
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>
                Keep in touch with the schedules and activities of your
                professor in the Computer Engineering Department
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Input Professor's Name"
                onChangeText={handleChangeText}
                onSubmitEditing={handleSubmit}
            />
            <Button handleSubmit={handleSubmit} />
        </View>
    );
}
