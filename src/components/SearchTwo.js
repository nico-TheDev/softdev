import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

import styles from "../styles/styleSearch";
import Button from "../components/Button";
import data from "../data";

export default function SearchTwo({
    title,
    query,
    setQuery,
    setSearchResults,
}) {
    const [userInput, setUserInput] = useState(query);

    const handleChangeText = (text) => setUserInput(text);

    const handleSubmit = (_) => {
        setSearchResults([...data.profs]);
        setQuery(userInput);
    };

    return (
        <View style={styles.container}>
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
