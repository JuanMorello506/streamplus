import React, { useState } from 'react';
import Home from './src/Home.js'
import MovieProfile from './src/components/movieProfile/MovieProfile.js'
import LogInRegister from './src/components/logInRegister/LogInRegister.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthContextGlobal, {defaultAuthData} from './src/services/AuthContext/index.js';

const App = () => {
	const Stack = createStackNavigator()

	const [authData, setAuthData] = useState(defaultAuthData);

	return (
		<AuthContextGlobal.Provider value={{authData, setAuthData}}>
		  <NavigationContainer>
			<Stack.Navigator initialRouteName={authData ? 'homeScreen' : 'LogInRegister'}>
				{/* <Stack.Navigator initialRouteName='homeScreen'> */}
				<Stack.Screen name='homeScreen' component={Home} options={{
					title: '',
					headerShown: false
				
				}} />
				<Stack.Screen name='LogInRegister' component={LogInRegister} options={{
					title: '',
					headerBackTitle: 'Back',
					headerBackTitleVisible: false
				}} />
				<Stack.Screen name='MovieProfile' component={MovieProfile} options={{
					title: '',
					headerBackTitleVisible: false
				
				}} />
			</Stack.Navigator>
		  </NavigationContainer>
		</AuthContextGlobal.Provider>
  
	)
};


export default App;

