import React from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "../styles/styleScheduleList";
import SubjectCard from "./SubjectCard";

export default function ScheduleList({ day, subjectList }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{day}</Text>
            <ScrollView horizontal={true} style={styles.scroll}>
                {subjectList ? (
                    subjectList.map((subject) => (
                        <SubjectCard subject={subject} key={subject.code} />
                    ))
                ) : (
                    <Text>No Schedule for Today</Text>
                )}
            </ScrollView>
        </View>
    );
}
