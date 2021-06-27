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
        padding: 15,
        height: "35%",
        flex: 1,
        justifyContent: "space-around",
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
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 20,
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
        paddingVertical: 20,
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
        flex: 1,
        flexDirection: "row",
        marginBottom: 20,
    },
    bottom: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: 50,
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
