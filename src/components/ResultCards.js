import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "../styles/styleSuggestion";
import ProfileCard from "../components/ProfileCard";

export default function ResultCards({ profList, title }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <ScrollView style={styles.scroll}>
                {profList && profList.length != 0 ? (
                    profList.map((item, i) => (
                        <ProfileCard key={i} prof={item} />
                    ))
                ) : (
                    <Text style={styles.title}>No Results</Text>
                )}
            </ScrollView>
        </View>
    );
}
