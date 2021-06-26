import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import { Icon } from "react-native-elements";

import styles from "../styles/styleProfileDetails";
import data from "../data";

export default function ProfileDetails({ prof }) {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image style={styles.img} source={prof.image} />
                <View style={styles.right}>
                    <Text style={styles.name}>{prof.name}</Text>
                    <Text style={styles.sub}>College of {prof.college}</Text>
                    <View style={styles.text}>
                        <Icon
                            name="envelope"
                            type="font-awesome-5"
                            color="#000"
                        />
                        <Text style={styles.label}>{prof.email}</Text>
                    </View>
                    <View style={styles.text}>
                        <Icon
                            name="phone-alt"
                            type="font-awesome-5"
                            color="#000"
                        />
                        <Text style={styles.label}>{prof.contact}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.bottom}>
                <TouchableHighlight
                    style={styles.buttonOutlined}
                    activeOpacity={0.7}
                >
                    <Text style={{ ...styles.btnText, color: "#FC9C17" }}>
                        Facebook
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.buttonFilled}
                    activeOpacity={0.7}
                >
                    <Text style={{ ...styles.btnText, color: "white" }}>
                        Message
                    </Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}
