import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "../styles/styleSuggestion";
import ProfileCard from "../components/ProfileCard";
import shuffle from "../util/shuffleArray";
export default function Suggestion({ profList, isRandomized, title }) {
    // if isRandomized, will fit you may know section
    // if not randomized, can be used in search results
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <ScrollView style={styles.scroll}>
                {profList && isRandomized
                    ? shuffle(profList)
                          .slice(0, 4)
                          .map((item) => (
                              <ProfileCard key={item.id} prof={item} />
                          ))
                    : profList?.map((item) => (
                          <ProfileCard key={item.id} prof={item} />
                      ))}
            </ScrollView>
        </View>
    );
}
