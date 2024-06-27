import React, { useState, useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import MovieContext from '../../services/AuthContext/index.js';
import Carrousel from "../carrousel/Carrousel.js";
import { getFavourites } from "../../services/Favourites/favouritesService.js";
import { updateUser } from '../../services/User/userService.js';
import { styles } from "./styles.js";

const PerfilData = () => {
  const [editMode, setEditMode] = useState(false);
  const { authData, handleAuthData } = useContext(MovieContext);
  const { id, userName, mail } = authData.data;
  const [newUserName, setNewUserName] = useState(userName);
  const [newMail, setNewMail] = useState(mail);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const favouritesFetched = await getFavourites(id);
        setFavourites(favouritesFetched);
        console.log(favouritesFetched);
      } catch (error) {
        console.error("Error al obtener favoritos:", error);
      }
    };

    fetchFavourites();
  }, [id]);

  const handleSave = async () => {
    if (!newUserName.trim() || !newMail.trim()) {
      Alert.alert("Error", "Por favor, completa todos los campos.");
      return;
    }

    const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!mailRegex.test(newMail)) {
      Alert.alert("Error", "Por favor, introduce un correo electrónico válido.");
      return;
    }

    try {
      console.log("Datos a enviar al servidor:", { userId: id, userName: newUserName, mail: newMail });
      const response = await updateUser(id, newUserName, newMail);
      console.log("Respuesta del servidor:", response);

      if (response.success) {
        const updatedAuthData = { ...authData, data: { ...authData.data, userName: newUserName, mail: newMail } };
        handleAuthData(updatedAuthData);
        setEditMode(false);
        Alert.alert("Éxito", "Perfil actualizado correctamente.");
      } else {
        Alert.alert("Error", "No se pudo actualizar el perfil.");
      }
    } catch (error) {
      console.error("Error al actualizar el perfil:", error);
      Alert.alert("Error", "Hubo un problema al actualizar el perfil.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title2}>STREAM+</Text>
      <View style={styles.perfil}>
        <View style={styles.perfilData}>
          <Image
            style={styles.image}
            source={{
              uri: "https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png",
            }}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Nombre de usuario</Text>
            <TextInput
              style={styles.input}
              value={newUserName}
              onChangeText={setNewUserName}
              editable={editMode}
            />
            <Text style={styles.label}>Correo electrónico</Text>
            <TextInput
              style={styles.input}
              value={newMail}
              onChangeText={setNewMail}
              editable={editMode}
            />
          </View>
        </View>

        <Text style={styles.labelFav}>Mis Favoritos</Text>
        <View>
          <Carrousel movies={favourites} />
        </View>
      </View>

      <View style={styles.buttons}>
        {!editMode ? (
          <TouchableOpacity style={styles.button} onPress={() => setEditMode(true)}>
            <Text style={styles.buttonText}>Editar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Aceptar</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default PerfilData;