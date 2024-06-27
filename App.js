import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { StyleSheet, View, Text } from "react-native";
import MovieContext, { MovieProvider } from "./src/services/AuthContext/index.js";
import Home from "./src/Home.js";
import LogInRegister from "./src/components/logInRegister/LogInRegister.js";
import LoadingScreen from "./src/components/loadingScreen/LoadingScreen.js";
import MovieProfile from "./src/components/movieProfile/MovieProfile.js"
import PerfilData from "./src/components/perfilData/PerfilData.js";
import VideoComponent from "./src/components/video/VideoComponent.js"


const AppContent = () => {
  const Stack = createStackNavigator();
  const { authData, loading, setLoading } = useContext(MovieContext);
  
  const [fontsLoaded] = useFonts({
    Helvetica: require("./assets/fonts/Helvetica.ttf"),
  });

  useEffect(() => {
    if (!fontsLoaded) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded || loading) {
    return <LoadingScreen />;
  }

  const isAuthDataValid = authData !== null && Object.keys(authData).length > 0;
  console.log("isAuthDataValid: " + isAuthDataValid);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isAuthDataValid ? "homeScreen" : "LogInRegister"}
      >
        <Stack.Screen
          name="homeScreen"
          component={Home}
          options={{
            title: "Home",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LogInRegister"
          component={LogInRegister}
          options={{
            title: "LogInRegister",
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="MovieProfile"
          component={MovieProfile}
          options={{
            title: "LogInRegister",
            headerShown: false,
          }}
        />

        <Stack.Screen
            name="profileScreen"
            component={PerfilData}
            options={{
              title: "profileScreen",
              headerShown: false,
            }}
          />

        <Stack.Screen
            name="VideoComponent"
            component={VideoComponent}
            options={{
              title: "VideoComponent",
              headerShown: false,
            }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



const App = () => {
  return (
    <MovieProvider>
      <AppContent />
    </MovieProvider>
  );
};

export default App;
