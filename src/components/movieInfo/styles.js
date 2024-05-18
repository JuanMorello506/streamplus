import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 10,
    backgroundColor: "#2196F3",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: 339,
    height: 307,
    padding: 20,
    backgroundColor: "#00072B",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    color: "white",
    fontSize: 25,
    marginBottom: 15,
    fontFamily: "Helvetica",
    fontWeight: "bold",
  },
  modalDirectedBy: {
    color: "white",
    fontSize: 20,
    marginBottom: 15,
    fontWeight: "bold",
  },
  modalText: {
    marginBottom: 15,
    color: "white",
  },
  closeButton: {
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 10,
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: "absolute",
    width: 339,
    height: 125,
  },
  modalInfo: {
    marginTop: 125,
    alignContent: "flex-start",
    alignItems: "flex-start",
  },
  buttons: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  playButton: {
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 100,
    alignSelf: "flex-end",
    position: "absolute",
  },
  info: {
    width: "100%",
    height: 140,
  },
});
