import React, { useEffect } from "react";
import {
  View,
  Image,
  TouchableHighlight,
  Modal,
  Text,
  ScrollView,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

const Filter = ({ visible, onClose, categories }) => {
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
          <ScrollView styles={styles.scroll}>
              { categories.map((category) => {
                return (
                  <View>
                    <TouchableHighlight
                      style={styles.categoryButton}
                      onPress={() => console.log("hola")}
                      underlayColor="#DDDDDD"
                    >
                      <Text style={styles.categoryText}>{category.category}</Text>
                    </TouchableHighlight>
                    <View style={styles.divider} />
                  </View>
                );
              })}
            </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default Filter;
