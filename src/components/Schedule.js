import React from "react";
import { View, Text, ScrollView } from "react-native";

import ScheduleList from "./ScheduleList";
import styles from "../styles/styleSchedule";

export default function Schedule({ schedule }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Schedule</Text>
            <ScrollView style={styles.scroll}>
                <ScheduleList day="Monday" subjectList={schedule?.Mon} />
                <ScheduleList day="Tuesday" subjectList={schedule?.Tue} />
                <ScheduleList day="Wednesday" subjectList={schedule?.Wed} />
                <ScheduleList day="Thursday" subjectList={schedule?.Thu} />
                <ScheduleList day="Friday" subjectList={schedule?.Fri} />
                <ScheduleList day="Saturday" subjectList={schedule?.Sat} />
            </ScrollView>
        </View>
    );
}
