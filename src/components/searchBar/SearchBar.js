import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Image, StyleSheet, Text, StatusBar, SafeAreaView } from "react-native";
import { styles } from "./styles";
import Filter from "../filter/Filter";
import { categories } from "../../mocks/categories";

const SearchBar = ({ updateSearch }) => {
  const [text, setText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleChangeText = (newText) => {
    setText(newText);
    updateSearch(newText);
  };

  return (
    <View style={styles.view}>
      <TextInput
        style={styles.input}
        value={console.log()}
        onChangeText={handleChangeText}
        placeholder="Ingrese la película..."
      />
    <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}> 
    <Image
        style={styles.image}
        source={{
          uri: 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/filter-512.png',
        }}
      />
    </TouchableOpacity>
    {/* <Filter 
    visible={modalVisible}
    onClose={() => setModalVisible(false)}
    categories={categories}
    /> */}
    </View>
  );
};

export default SearchBar;
