import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  view: {
    backgroundColor: "#14111C",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#D9D9D9",
    width: '90%',
    height: 30,
    borderRadius: 9,
    margin: 10,
    paddingLeft: 10,
    shadowColor: "#000", // Añade estas líneas
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    backgroundColor: "#D9D9D9",
    width: 33,
    height: 30,
    borderRadius: 92,
    margin: 10,
    alignContent: "center",
    justifyContent: "center",
  },
  image: {
    width: "80%",
    height: "80%",
    alignSelf: "center",
  },
});
