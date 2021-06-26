import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius: 15,
        backgroundColor: "white",
        padding: 20,
        height: "40%",
    },
    img: {
        width: 110,
        height: 110,
        marginRight: 20,
    },
    buttonOutlined: {
        fontSize: 20,
        fontFamily: "Montserrat-Light",
        backgroundColor: "white",
        color: "#FC9C17",
        borderColor: "#FC9C17",
        borderWidth: 3,
        borderRadius: 15,
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonFilled: {
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FC9C17",
        color: "white",
        borderRadius: 15,
        marginLeft: 10,
    },
    btnText: { fontSize: 15, fontFamily: "Montserrat-Light" },
    name: {
        fontFamily: "Montserrat-Bold",
        fontSize: 18,
    },
    sub: {
        fontFamily: "Montserrat-Light",
        fontSize: 10,
    },
    label: {
        fontFamily: "Montserrat-Regular",
        marginLeft: 10,
        fontSize: 12,
    },
    top: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 20,
    },
    bottom: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "stretch",
        width: "100%",
        flex: 1,
    },
    right: {
        display: "flex",
        justifyContent: "space-between",
        flexShrink: 1,
    },
    text: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
});
