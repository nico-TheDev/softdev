import { StyleSheet } from "react-native";

export default StyleSheet.create({
    img: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginRight: 20,
    },
    card: {
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginBottom: 15,
        paddingVertical: 15,
        paddingHorizontal: 10,
    },
    name: {
        fontSize: 15,
        fontFamily: "Montserrat-Medium",
        flex: 1,
    },
});
