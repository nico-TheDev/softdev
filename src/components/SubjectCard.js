import React from "react";
import { View, Text } from "react-native";

import styles from "../styles/styleSubjectCard";

export default function SubjectCard({ subject }) {
    return (
        <View style={styles.card}>
            <Text style={styles.name}>{subject.name}</Text>
            <Text style={styles.code}>{subject.code}</Text>
            <Text style={styles.time}>{subject.time} </Text>
        </View>
    );
}
