import React from "react";
import {
  View,
  Image,
} from "react-native";
import { ScrollView } from "react-native-web";
import { movies } from "../../mocks/movies";
import { styles } from "./styles";
import Movie from "../movie";

const Carrousel = () => {
  return (
    <View style={styles.scroll}>
        <ScrollView horizontal>
            {movies.map((movie) => (
              <Movie movie={movie}/>
            ))}
        </ScrollView>
    </View>
  );
};

export default Carrousel;
