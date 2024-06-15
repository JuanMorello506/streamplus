import React, { useState, useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import Carrousel from "./components/carrousel/Carrousel.js";
import SearchBar from "./components/searchBar/SearchBar.js";
import Movie from "./components/movie/Movie.js";
import { useNavigation } from "@react-navigation/native";
import MovieContext from "./services/AuthContext/index.js";
import { BASE_URL } from "./config/config.js";

const { width } = Dimensions.get("window");

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const { movies } = useContext(MovieContext);
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    fetch(`${BASE_URL}/streamplus/category/`, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la petición");
        }
        return response.json();
      })
      .then((response) => {
        const { message } = response;
        setCategories(message);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error", JSON.stringify(error));
      });
  };

  const navigation = useNavigation();
  const numColumns = 3;
  const itemWidth = width / numColumns - 6;

  const handlePressPerfil = () => {
    navigation.navigate("profileScreen");
  };

  const renderItemCategories = ({ item }) => {
    const moviesCategories = movies.filter(
      (movie) => movie.categoryId === item.id
    );

    return (
      <View style={styles.categoryView}>
        <Text style={styles.category}>{item.name}</Text>
        <Carrousel category={item} movies={moviesCategories} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.data}>
        <TouchableOpacity
          style={styles.perfilButton}
          onPress={handlePressPerfil}
        >
          <Image
            style={styles.image}
            source={{
              uri: "https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png",
            }}
          />
        </TouchableOpacity>
        <Text style={styles.welcome}>Bienvenido </Text>
      </View>

      <Text style={styles.title2}>STREAM+</Text>
      {/* <Text style={styles.title}>
        S<Text style={styles.t}>T</Text>REAM<Text style={styles.plus}>+</Text>
      </Text> */}

      {isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#AD92F1" />
        </View>
      ) : (
        <>
          <SearchBar updateSearch={setSearchText} />
          {searchText ? (
            <ScrollView contentContainerStyle={styles.filteredView}>
              {filteredMovies.map(item => <Movie movie={item} key={item.id} />)}
            </ScrollView>
          ) : (
            <FlatList data={categories} renderItem={renderItemCategories} />
          )}
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 50,
    fontFamily: "sans-serif-medium",
    marginBottom: 20,
  },
  flatListContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: 15,
    justifyContent: "center",
  },
  itemContainer: {
    width: "100%",
  },
  title2: {
    color: "white",
    fontSize: 72,
    fontFamily: "Helvetica",
    marginBottom: 20,
    fontWeight: "bold",
  },
  t: {
    color: "#AD92F1",
  },
  plus: {
    color: "#FCA82B",
  },
  category: {
    fontSize: 32,
    alignSelf: "flex-start",
    marginLeft: 20,
    color: "white",
  },
  categoryView: {
    marginBottom: 20,
  },
  movie: {
    width: 60,
    height: 100,
    backgroundColor: "grey",
    borderRadius: 5,
    margin: 14,
  },
  container: {
    flex: 1,
    backgroundColor: "#14111C",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  filteredView: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 50,
    fontFamily: "sans-serif-medium",
    marginBottom: 20,
  },
  t: {
    color: "#AD92F1",
  },
  plus: {
    color: "#FCA82B",
  },
  form: {
    backgroundColor: "#332B47",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  formField: {
    width: "90%",
    marginBottom: 20,
  },
  label: {
    color: "white",
    fontSize: 20,
    fontFamily: "sans-serif-light",
    fontWeight: "400",
    marginBottom: 10,
  },
  input: {
    fontSize: 16,
    fontFamily: "sans-serif-light",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#D9D9D9",
  },
  button: {
    backgroundColor: "#AD92F1",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 140,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontFamily: "sans-serif-medium",
  },
  tyc: {
    color: "black",
    fontSize: 16,
    fontFamily: "sans-serif-medium",

    position: "absolute",
    bottom: 15,
    left: 20,
  },
  wave: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  perfilButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 10,
  },
  data: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  welcome: {
    color: "white",
    fontSize: 20,
    fontFamily: "Helvetica",
  },
});

export default Home;
