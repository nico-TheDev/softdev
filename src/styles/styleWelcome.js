import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 50,
        paddingHorizontal: 15,
    },
    btnText: {
        textAlign: "center",
    },
    btn: {
        alignSelf: "stretch",
        marginTop: 40,
    },
    text: {
        fontSize: 20,
        fontFamily: "Montserrat-Medium",
        textAlign: "center",
        paddingHorizontal: 20,
        marginVertical: 20,
    },
    main: { flex: 1, alignItems: "center" },
    title: {
        fontSize: 25,
        fontFamily: "Montserrat-Bold",
        textAlign: "center",
    },
});
