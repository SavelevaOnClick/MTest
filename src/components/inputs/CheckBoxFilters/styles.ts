import { colors } from "@constants";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: colors.grey_border_E1E1E8,
        paddingHorizontal: 16,
        height: 58,
        alignItems: "center",
        justifyContent: "space-between"
    },
    title: {
        color: colors.main_black_1B1B1B,
        fontSize: 16,
    },
    titleActive: {
        color: colors.green_icon_00AE36
    }
})