import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";
import { TouchableHighlight } from "react-native-web";


const Movie = ({ movie }) => {
  return (
    <TouchableHighlight style={styles.touchable}
    onPress= {() => console.log(movie) }>
    <View style={styles.movie}>
      <Image
        style={styles.image}
        source={{
          uri: movie.img,
        }}
      />
    </View>
    </TouchableHighlight>
  );
};

export default Movie;
