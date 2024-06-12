import React, { useState } from "react";
import Home from "./src/Home.js";
import MovieProfile from "./src/components/movieProfile/MovieProfile.js";
import LogInRegister from "./src/components/logInRegister/LogInRegister.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthContextGlobal, {
  defaultAuthData,
} from "./src/services/AuthContext/index.js";
import { useFonts } from "expo-font";
import VideoComponent from "./src/components/video/VideoComponent.js";

const App = () => {
  const [fontsLoaded] = useFonts({
    Helvetica: require("./assets/fonts/Helvetica.ttf"),
  });
  const Stack = createStackNavigator();

  const [authData, setAuthData] = useState(defaultAuthData);
  console.log(defaultAuthData);
  return (
    <AuthContextGlobal.Provider value={{ authData, setAuthData }}>
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
              title: "asd",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MovieProfile"
            component={MovieProfile}
            options={{
              title: "asd",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="VideoComponent"
            component={VideoComponent}
            options={{
              title: "asd",
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContextGlobal.Provider>
  );
};

export default App;
