import { colors } from "@constants";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        borderBottomWidth: 2,
        borderBottomColor: colors.grey_border_E1E1E8,
        flexDirection :"row",
        height: 40,
        alignItems: "center",
    },
    input: {
        flex: 1,
        height: 40,
        marginLeft: 8,
        fontSize: 16
    }
})