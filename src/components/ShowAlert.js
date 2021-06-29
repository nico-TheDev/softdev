import React from "react";
import { Alert } from "react-native";

export default function ShowAlert() {
    return Alert.alert(
        "Alert",
        "The search input is blank",
        [
            {
                text: "OK",
                onPress: () => {},
            },
        ],
        {
            cancelable: true,
        }
    );
}
