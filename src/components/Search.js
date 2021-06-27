import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

import styles from "../styles/styleSearch";
import Button from "../components/Button";

export default function Search({ title }) {
    // make use of useNavigation hook from react navigation
    const [userInput, setUserInput] = useState("");

    const handleChangeText = (text) => setUserInput(text);

    const handleSubmit = () => {
        // NAVIGATE TO A SEARCH PAGE RESULTS
        // PASS SEARCH QUERY which is userInput
    };

    return (
        <View style={styles.container}>
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
