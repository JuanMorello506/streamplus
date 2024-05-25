import React from 'react';
import Home from './src/Home.js'
import MovieProfile from './src/components/movieProfile/MovieProfile.js'
import LogInRegister from './src/components/logInRegister/LogInRegister.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const App = () => {
	const Stack = createStackNavigator()

  return (
	<NavigationContainer>
	<Stack.Navigator initialRouteName='homeScreen'>
	  <Stack.Screen name='homeScreen' component={Home} options={{
		title: '',
		headerShown: false
	  
	  }} />
	  <Stack.Screen name='LogInRegister' component={LogInRegister} options={{
		title: '',
		headerBackTitle: 'Back',
		headerBackTitleVisible: false
	  }}/>
	  <Stack.Screen name='MovieProfile' component={MovieProfile} options={{
		title: '',
		headerBackTitleVisible: false
	  
	  }} />
	</Stack.Navigator>
  </NavigationContainer>
  
)};



export default App;

