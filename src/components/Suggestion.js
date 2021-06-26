import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "../styles/styleSuggestion";
import ProfileCard from "../components/ProfileCard";
import shuffle from "../util/shuffleArray";
export default function Suggestion({ profList }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>You May Know</Text>
            <ScrollView style={styles.scroll}>
                {profList ? (
                    shuffle(profList)
                        .slice(0, 4)
                        .map((item) => (
                            <ProfileCard key={item.id} prof={item} />
                        ))
                ) : (
                    <Text style={styles.title}>Loading...</Text>
                )}
            </ScrollView>
        </View>
    );
}
