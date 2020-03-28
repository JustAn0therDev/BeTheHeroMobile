import { StyleSheet } from "react-native";
import generalStyles from '../../styles/generalStyles';

export default StyleSheet.create({
  container: { 
      flex: 1, 
      paddingHorizontal: 24,
      paddingTop: generalStyles.mainContainerPaddingTop,
    },
    header: {
        flexDirection: generalStyles.flexDirectionRow,
        justifyContent: generalStyles.spaceBetween,
        alignItems: generalStyles.centerItems
    },
    headerText: {
        fontSize: generalStyles.mainFontSize,
        color: generalStyles.clearTextColor
    },
    headerTextBold: {
        fontWeight: generalStyles.boldFont
    },
    title: {
        fontSize: generalStyles.mainFontSize * 2,
        marginBottom: 16,
        marginTop: 48,
        color: generalStyles.darkTextColor,
        fontWeight: generalStyles.mainFontSize
    },
    description: {
        fontSize: generalStyles.mainFontSize + 1,
        lineHeight: 24,
        color: generalStyles.clearTextColor
    },
    incidentList: {
        marginTop: 32
    },
    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: generalStyles.whiteTextColor,
        marginBottom: 16
    },
    incidentProperty: {
        fontSize: generalStyles.mainFontSize - 1,
        color: generalStyles.grayTextColor,
        fontWeight: generalStyles.boldFont
    },
    incidentValue: {
        marginTop: 8,
        fontSize: generalStyles.mainFontSize,
        marginBottom: 24,
        color: generalStyles.clearTextColor
    },

    detailsButton: {
        flexDirection: generalStyles.flexDirectionRow,
        justifyContent: generalStyles.spaceBetween,
        alignItems: generalStyles.centerItems
    },

    detailsButtonText: {
        color: generalStyles.mainBeTheHeroRedColor,
        fontSize: generalStyles.mainFontSize,
        fontWeight: generalStyles.boldFont
    }
});
