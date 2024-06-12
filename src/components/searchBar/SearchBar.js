import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Image, StyleSheet, Text, StatusBar, SafeAreaView } from "react-native";
import { styles } from "./styles";

const SearchBar = ({ updateSearch }) => {
  const [text, setText] = useState('');

  const handleChangeText = (newText) => {
    setText(newText);
    updateSearch(newText);
  };

  const handlePress = () => {
    console.log('pressed');
  };
  return (
    <View style={styles.view}>
      <TextInput
        style={styles.input}
        value={console.log('value')}
        onChangeText={handleChangeText}
        placeholder="Ingrese la película..."
      />
    <TouchableOpacity style={styles.button} onPress={handlePress}> 
    <Image
        style={styles.image}
        source={{
          uri: 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/filter-512.png',
        }}
      />
    </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
