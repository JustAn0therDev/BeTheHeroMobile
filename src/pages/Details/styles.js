import { StyleSheet } from "react-native";
import generalStyles from "../../styles/generalStyles";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: generalStyles.mainContainerPaddingTop
  },
  header: {
    flexDirection: generalStyles.flexDirectionRow,
    justifyContent: generalStyles.spaceBetween,
    alignItems: generalStyles.centerItems
  },
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: generalStyles.whiteTextColor,
    marginBottom: 16
  },
  incidentProperty: {
    fontSize: 14,
    color: generalStyles.darkTextColor,
    marginTop: 24,
    fontWeight: generalStyles.boldFont
  },
  incidentValue: {
    marginTop: 8,
    fontSize: generalStyles.mainFontSize,
    color: generalStyles.clearTextColor
  },
  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: generalStyles.whiteTextColor,
    marginBottom: 16
  },
  heroTitle: {
      fontWeight: generalStyles.boldFont,
      fontSize: generalStyles.mainFontSize + 5,
      color: "#13131a",
      lineHeight: 30
  },
  heroDescription: {
      fontSize: generalStyles.mainFontSize,
      color: generalStyles.clearTextColor,
      marginTop: 16
  },
  actions: {
      marginTop: 16,
      flexDirection: generalStyles.flexDirectionRow,
      justifyContent: generalStyles.spaceBetween
  },
  action: {
      backgroundColor: generalStyles.mainBeTheHeroRedColor,
      borderRadius: 8,
      height: 50,
      width: "48%",
      justifyContent: generalStyles.centerItems
  },
  actionText: {
      color: generalStyles.whiteTextColor,
      fontSize: generalStyles.mainFontSize,
      fontWeight: generalStyles.boldFont
  }
});
