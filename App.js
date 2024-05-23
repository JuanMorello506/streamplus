import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, useWindowDimensions} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import Home from './src/Home.js'
import MovieProfile from './src/components/movieProfile/index.js'
import VideoComoponent from './src/components/video/index.js'
import VideoComponent from './src/components/video/index.js';

const App = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const {height, width} = useWindowDimensions();

	const handleSubmit = () => {
		console.log('Username:', username);
		console.log('Password:', password);
	};

  return (
	// <View style={styles.container}>
	// 	<Text style={styles.title}>S<Text style={styles.t}>T</Text>REAM<Text style={styles.plus}>+</Text></Text>
	// 	<View style={styles.form}>
	// 		<View style={styles.formField}>
	// 			<Text style={styles.label}>Nombre de usuario:</Text>
	// 			<TextInput
	// 				style={styles.input}
	// 				value={username}
	// 				onChangeText={setUsername}
	// 				placeholder='Ingrese su usuario...'
	// 			/>
	// 		</View>
	// 		<View style={styles.formField}>
	// 			<Text style={styles.label}>Contraseña:</Text>
	// 			<TextInput
	// 				style={styles.input}
	// 				value={password}
	// 				onChangeText={setPassword}
	// 				placeholder='Ingrese su contraseña...'
	// 				secureTextEntry={true}
	// 			/>
	// 		</View>
	// 		<TouchableOpacity style={styles.button} onPress={handleSubmit}>
	// 			<Text style={styles.buttonText}>Confirmar</Text>
	// 		</TouchableOpacity>
	// 	</View>

	// 	<Svg style={styles.wave} height="150" width={width} viewBox={`0 0 ${width} 150`}>
    // 		<Path d={`M0 150 L0 0 C100 75 ${width / 1.5} 75 ${width} 75 L${width} 150 Z`} fill="#F7F0F0" />
	// 	</Svg>

	// 	<Text style={styles.tyc}>Términos & Condiciones</Text>
		
	// 	{/* Descomentar para ver el home */}
	// 	{/* <Home /> */}
	// </View>
	//<MovieProfile></MovieProfile>
	<VideoComoponent></VideoComoponent>
	
  );
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#14111C',
		justifyContent: 'center',
		alignItems: 'center',

		position: 'relative',
	},
	title: {
		color: 'white',
		fontSize: 60,
		fontFamily: 'sans-serif-medium',
		marginBottom: 10,
	},
	t: {
		color: '#AD92F1',
	},
	plus: {
		color: '#FCA82B',
	},
	form: {
		backgroundColor: '#332B47',
		borderRadius: 10,
		padding: 20,
		width: '80%',
		maxWidth: 400,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	formField: {
		width: '90%',
		marginBottom: 20,
	},
	label: {
		color: 'white',
		fontSize: 20,
		fontFamily: 'sans-serif-light',
		fontWeight: '400',
		marginBottom: 10,
	},
	input: {
		fontSize: 16,
		fontFamily: 'sans-serif-light',
		borderRadius: 5,
		padding: 10,
		backgroundColor: '#D9D9D9',
	},
	button: {
		backgroundColor: '#AD92F1',
		alignItems: 'center',
		justifyContent: 'center',
		height: 40,
		width: 140,
		borderRadius: 5,
	},
	buttonText: {
		color: 'white',
		fontSize: 20,
		fontFamily: 'sans-serif-medium',
	},
	tyc: {
		color: 'black',
		fontSize: 16,
		fontFamily: 'sans-serif-medium',

		position: 'absolute',
		bottom: 15,
		left: 20,
	},
	wave : {
		position: 'absolute',
		bottom: 0,
		left: 0,
		width: '100%',
	},
});

export default App;

