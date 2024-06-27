import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#14111C",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
    },
    title2: {
      color: "white",
      fontSize: 72,
      fontFamily: "Helvetica",
      marginBottom: 20,
      fontWeight: "bold",
      marginTop: 4
    },
    perfil: {
      flex: 1,
      backgroundColor: "#332B47",
      borderRadius: 10,
      width: '90%',
      padding: 10,
    },
    perfilData: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    image: {
      width: 120,
      height: 120,
      borderRadius: 60,
      marginRight: 20,
    },
    infoContainer: {
      flex: 1,
    },
    label: {
      color: "white",
      fontSize: 20,
      fontFamily: "sans-serif-light",
      fontWeight: "400",
      marginBottom: 10,
    },
    labelFav: {
      color: "white",
      fontSize: 20,
      fontFamily: "sans-serif-light",
      fontWeight: "500",
      marginBottom: 10,
      marginTop: 20,
    },
    input: {
      fontSize: 16,
      fontFamily: "sans-serif-light",
      color: "white",
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      backgroundColor: "#14111C",
      width: "100%",
    },
    buttons: {
      marginTop: 20,
    },
    button: {
      backgroundColor: "#AD92F1",
      alignItems: "center",
      justifyContent: "center",
      height: 40,
      width: 140,
      borderRadius: 5,
    },
    buttonText: {
      color: "white",
      fontSize: 20,
      fontFamily: "sans-serif-medium",
    },
  });