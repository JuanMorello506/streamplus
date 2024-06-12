import React from "react";
import {
  View,
  Image,
  ScrollView,
  FlatList
} from "react-native";
import { styles } from "./styles.js";
import Movie from "../movie/Movie.js";

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
