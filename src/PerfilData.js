import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Carrousel from "./components/carrousel/index.js";
import SearchBar from "./components/searchBar/index.js";
import { categories } from "./mocks/categories.js";

const PerfilData = ({ user }) => {
  const [editMode, setEditMode] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title2}>STREAM+</Text>
      <View style={styles.perfil}>
        {console.log(user)}
        <Text style={styles.title3}>Tus datos de perfil</Text>
        <Text style={styles.label}>Nombre de usuario</Text>
        <TextInput
          style={styles.input}
          value={user.userName}
          editable={editMode}
        />
        <Text style={styles.label}>Nombre</Text>
        <TextInput style={styles.input} value={user.name} editable={editMode} />
        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput
          style={styles.input}
          value={user.email}
          editable={editMode}
        />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          value={user.password}
          secureTextEntry={true}
          editable={editMode}
        />
      </View>
      <View style={styles.buttons}>
        {!editMode ? (
          <TouchableOpacity style={styles.button} onPress={() => setEditMode(true)}>
            <Text style={styles.buttonText}>Editar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={() => setEditMode(false)}>
            <Text style={styles.buttonText}>Aceptar</Text>
          </TouchableOpacity>
        )}
      </View>
      {/* <Text style={styles.title}>
        S<Text style={styles.t}>T</Text>REAM<Text style={styles.plus}>+</Text>
      </Text> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  perfil: {
    backgroundColor: "#14111C",
    borderRadius: 10,
    padding: 20,
    width: "100%",
    justifyContent: "top",
    alignItems: "left",
    flexDirection: "column",
  },
  title: {
    color: "white",
    fontSize: 50,
    fontFamily: "sans-serif-medium",
    marginBottom: 20,
  },
  title2: {
    color: "white",
    fontSize: 72,
    fontFamily: "Helvetica",
    marginBottom: 20,
    fontWeight: "bold",
  },
  title3: {
    color: "white",
    fontSize: 40,
    fontFamily: "Helvetica",
    marginBottom: 20,
    fontWeight: "bold",
  },
  t: {
    color: "#AD92F1",
  },
  plus: {
    color: "#FCA82B",
  },
  category: {
    fontSize: 32,
    alignSelf: "flex-start",
    marginLeft: 20,
    color: "white",
  },
  categoryView: {
    marginBottom: 20,
  },
  movie: {
    width: 60,
    height: 100,
    backgroundColor: "grey",
    borderRadius: 5,
    margin: 14,
  },
  container: {
    flex: 1,
    backgroundColor: "#14111C",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  title: {
    color: "white",
    fontSize: 50,
    fontFamily: "sans-serif-medium",
    marginBottom: 20,
  },
  t: {
    color: "#AD92F1",
  },
  plus: {
    color: "#FCA82B",
  },
  form: {
    backgroundColor: "#332B47",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  formField: {
    width: "90%",
    marginBottom: 20,
  },
  label: {
    color: "white",
    fontSize: 20,
    fontFamily: "sans-serif-light",
    fontWeight: "400",
    marginBottom: 10,
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
  inputPassword: {
    fontSize: 16,
    fontFamily: "sans-serif-light",
    color: "white",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#14111C",
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
  tyc: {
    color: "black",
    fontSize: 16,
    fontFamily: "sans-serif-medium",

    position: "absolute",
    bottom: 15,
    left: 20,
  },
  wave: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
  },
});

export default PerfilData;
