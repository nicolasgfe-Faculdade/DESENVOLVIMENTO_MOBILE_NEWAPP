import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  constainer: {
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    elevation: 2,
  },
  cover: {
    height: 120,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  title: {
    margin: 10,
    fontSize: 16,
    fontWeight: "bold"
  },
  detailContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  source: {
    textAlign: "left",
    fontSize: 12,
    flex: 0.5
  },
  date: {
    textAlign: "right",
    fontSize: 12,
    flex: 0.5
  }
})
export default styles
