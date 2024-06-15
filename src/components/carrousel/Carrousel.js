import { View, FlatList } from "react-native";
import { styles } from "./styles.js";
import React from "react";
import Movie from "../movie/Movie.js";

const Carrousel = ({ category, movies }) => {
  return (
    <View style={styles.scroll}>
      <FlatList
        data={movies}
        renderItem={({ item }) =>
          <Movie style={styles.marginLeft} movie={item} />
        }
        horizontal
      />
    </View>
  );
};

export default Carrousel;
