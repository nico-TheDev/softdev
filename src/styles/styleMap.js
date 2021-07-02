import { StyleSheet } from "react-native";

export default StyleSheet.create({
    roomsHeader: {
        fontSize: 20,
        fontFamily: "Montserrat-Medium",
        margin: 15,
    },
    roomsText: {
        fontFamily: "Montserrat-Medium",
        margin: 15,
    },
    facultyHeader: {
        fontSize: 25,
        fontFamily: "Montserrat-Bold",
        margin: 15,
    },
    facultyText: {
        fontFamily: "Montserrat-Bold",
        margin: 15,
    },
    innerScroll: {
        height: "100%",
    },
    outerScroll: {
        height: "50%",
        width: "100%",
    },
    container: {
        flex: 1,
        padding: 20,
    },
    bottom: {
        flex: 1,
    },
    border: {
        borderColor: "#FC9C17",
        borderWidth: 5,
    },
    drag: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: [{ translateX: -50 }, { translateY: -30 }],
        fontSize: 20,
        textAlign: "center",
        backgroundColor: "#D3D3D3",
        color: "black",
        padding: 10,
        borderRadius: 5,
    },
});
