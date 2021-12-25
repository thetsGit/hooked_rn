import { StyleSheet } from "react-native";
import { width, height } from "../dimensions";

export const globalstyles = StyleSheet.create({
  formTitle: {
    color: "white",
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: height * 0.054,
    marginTop: height * 0.025,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: width * 0.135,
  },
  overflowContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: width * 0.135,
  },
  bgImg: {
    flex: 1,
    resizeMode: "cover",
  },
  navText: {
    color: "white",
    fontSize: 12,
  },
  btnWrap: {
    marginVertical: height * 0.029,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  snippet: {
    color: "lightgrey",
    lineHeight: 20,
    fontSize: 13,
    marginBottom: height * 0.039,
  },
});
