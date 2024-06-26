import React, { useEffect } from "react";
import {
  View,
  Image,
  TouchableHighlight,
  Modal,
  Text,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native';

const MovieInfo = ({ visible, onClose, movie }) => {
  const navigation = useNavigation();

  useEffect(() => {
    // cuando el componente se desmonta o cuando cambia la visibilidad
    return () => {
      if (visible) {
        onClose();
      }
    };
  }, [visible]);

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalView}>
          <Image
            style={styles.image}
            source={{
              uri: movie.img,
            }}
          />
          <TouchableHighlight
            style={{
              position: "absolute",
              top: 10,
              right: 15,
            }}
            onPress={onClose}
            underlayColor="#DDDDDD"
          >
            <Text style={{ fontSize: 20, color: "white", shadowOpacity: 1 }}>
              X
            </Text>
          </TouchableHighlight>
          <View style={styles.modalInfo}>
            <TouchableHighlight
              style={styles.playButton}
              onPress={() => {
                onClose(); // Close the modal before navigating
                navigation.navigate('MovieProfile', { id: movie.id, img: movie.img, title: movie.title });
              }}
              underlayColor="#DDDDDD"
            >
              <Text style={{ fontSize: 15, color: "white" }}>Detalle</Text>
            </TouchableHighlight>

            <View style={styles.info}>
              <Text numberOfLines={1} style={styles.modalTitle}>{movie.title}</Text>
              <ScrollView style={styles.scrollInfo}>
                <Text style={styles.modalText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </Text>
                <Text style={styles.modalDirectedBy}>Dirigida por :</Text>
                <Text style={styles.modalText}>{movie.director}</Text>
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default MovieInfo;
