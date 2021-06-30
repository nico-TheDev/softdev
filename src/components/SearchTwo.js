import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity as Btn } from "react-native";

import styles from "../styles/styleSearch";
import Button from "../components/Button";
import data from "../data";
import ShowAlert from "./ShowAlert";

export default function SearchTwo({
    title,
    query,
    setQuery,
    setSearchResults,
}) {
    const [userInput, setUserInput] = useState("");
    const [isAlertOpen, setIsAlertOpen] = useState(false);

    const handleChangeText = (text) => setUserInput(text);

    const handleSubmit = (_) => {
        if (userInput == "") {
            setIsAlertOpen(true);
            // shit solution but working
            setTimeout(() => setIsAlertOpen(false), 2000);
        } else {
            setSearchResults([...data.profs]);
            setQuery(userInput);
            setUserInput("");
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
            <TextInput
                style={styles.input}
                placeholder="Input Professor's Name"
                onChangeText={handleChangeText}
                onSubmitEditing={handleSubmit}
                value={userInput}
            />
            <Button handleSubmit={handleSubmit} />
        </View>
    );
}
