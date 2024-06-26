import React, { useEffect, useState } from "react";
import { View, Image, TouchableHighlight, Modal, Text } from "react-native";
import { styles } from "./styles";
import MovieInfo from "../movieInfo/MovieInfo";

const Movie = ({ movie }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableHighlight style={styles.movie} onPress={() => setModalVisible(true)}>
        <Image
          style={styles.image}
          source={{
            uri: movie.img,
          }}
        />
      </TouchableHighlight>
      <MovieInfo
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        movie={movie}
      />
    </>
  );
};

export default Movie;
