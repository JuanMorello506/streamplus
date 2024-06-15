
import {
  View,
  Image,
  ScrollView,
  FlatList
} from "react-native";
import { styles } from "./styles.js";
import React, { useContext } from 'react';


const Carrousel = ({ category, movies }) => {
  
  const renderItem = ({ item }) => {
    if(item.category == category.category)
     return ( <Movie movie={item}/> )
    return (<></>);
  }

  return (
    <View style={styles.scroll}>
      <FlatList data={movies} renderItem={renderItem} horizontal/>
    </View>
  );
};

export default Carrousel;
