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
import { getCategories } from "./services/Category/category.js";

const { width } = Dimensions.get("window");

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const { movies, handleAuthData } = useContext(MovieContext);

  const filteredMovies = Array.isArray(movies)
    ? movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchText.toLowerCase())
      )
    : [];

  useEffect(() => {
    getCategories(setCategories, setIsLoading);
  }, []);



  const navigation = useNavigation();
  const numColumns = 3;
  const itemWidth = width / numColumns - 6;

  const handlePressPerfil = () => {
    navigation.navigate("profileScreen");
  };

  const handleLogOut = (data) =>{
    handleAuthData(data)
    navigation.navigate("LogInRegister")
  };

  const renderItemCategories = ({ item }) => {
    const moviesCategories = Array.isArray(movies)
      ? movies.filter((movie) => movie.categoryId === item.id)
      : [];

    return (
      <View style={styles.categoryView}>
        <Text style={styles.category}>{item.name}</Text>
        <Carrousel category={item} movies={moviesCategories} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.perfilButton} onPress={handlePressPerfil}>
          <Image
            style={styles.image}
            source={{
              uri: "https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.logOutButton} onPress={() => handleLogOut(null)}>
          <Text style={styles.logOut}>Log out</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title2}>STREAM+</Text>

      {isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#AD92F1" />
        </View>
      ) : (
        <>
          <SearchBar updateSearch={setSearchText} />
          {searchText ? (
            <ScrollView contentContainerStyle={styles.filteredView}>
              {filteredMovies.map((item) => (
                <Movie movie={item} key={item.id} />
              ))}
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
  container: {
    flex: 1,
    backgroundColor: "#14111C",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  logOutButton: {
    position: "absolute",
    top: 20,
    right: 20,
    alignSelf: 'flex-end',
    marginTop: 20,
  },
  logOut: {
    color: "white",
    fontSize: 15,
    fontFamily: "sans-serif-medium",
  },
  title2: {
    color: "white",
    fontSize: 72,
    fontFamily: "Helvetica",
    marginBottom: 20,
    fontWeight: "bold",
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
  image: {
    margin: 2,
    position: "absolute",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  perfilButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 10,
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  filteredView: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default Home;
