import React from "react";
import {
  View,
  Image,
  ScrollView,
  FlatList
} from "react-native";
import { movies } from "../../mocks/movies";
import { styles } from "./styles";
import Movie from "../movie/index.js";

const Carrousel = ({ category }) => {

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
