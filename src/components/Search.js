import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

import styles from "../styles/styleSearch";
import Button from "../components/Button";

export default function Search() {
    const [userInput, setUserInput] = useState("");

    const handleChangeText = (text) => setUserInput(text);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Find your Professor </Text>
            <Text style={styles.subtitle}>
                Keep in touch with the schedules and activities of your
                professor in the Computer Engineering Department
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Input Professor's Name"
                onChangeText={handleChangeText}
            />
            <Button />
        </View>
    );
}
