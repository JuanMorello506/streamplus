
import {
  View,
  Image,
  ScrollView,
  FlatList
} from "react-native";
import { styles } from "./styles.js";
import React, { useContext } from 'react';
import Movie from "../movie/Movie.js";


const Carrousel = ({ category, movies }) => {

  const renderItem = ({ item }) => {
    // if(category.id == 'TE'){
    //   console.log("item", item)
    //   console.log("category", category)
    // }
    // if(item.categoryId == 'TE'){
    //   console.log("item", item)
    //   console.log("category", category)
    // }
    // if(item.categoryId == category.id){
    //   if(category.id == 'TE'){
    //     console.log("item", item)
    //     console.log("category", category)
    //   }
    if(item.categoryId == category.id){
        return <Movie movie={item}/>
    }
   
  }

  return (
    <View style={styles.scroll}>
      <FlatList data={movies} renderItem={renderItem} horizontal/>
    </View>
  );
};

export default Carrousel;
