import React, { useState, useContext } from "react";
import Home from "./src/Home.js";
import PerfilData from "./src/PerfilData.js";
import MovieProfile from "./src/components/movieProfile/MovieProfile.js";
import LogInRegister from "./src/components/logInRegister/LogInRegister.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthContextGlobal, {
  defaultAuthData,
} from "./src/services/AuthContext/index.js";
import { useFonts } from "expo-font";
import VideoComponent from "./src/components/video/VideoComponent.js";
import MovieContext, { MovieProvider } from "./src/services/AuthContext/index.js";


const App = () => {
  const [fontsLoaded] = useFonts({
    Helvetica: require("./assets/fonts/Helvetica.ttf"),
  });
  const Stack = createStackNavigator();
  const authData = useContext(MovieContext)
  console.log(authData)
  
  console.log(defaultAuthData);
  return (
    <MovieProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={authData ? "homeScreen" : "LogInRegister"}
        >
          {/* <Stack.Navigator initialRouteName='homeScreen'> */}
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
            name="profileScreen"
            component={PerfilData}
            options={{
              title: "profileScreen",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MovieProfile"
            component={MovieProfile}
            options={{
              title: "MovieProfile",
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
    </MovieProvider>
  );
};

export default App;
