import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, useWindowDimensions} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import { styles } from "./style.js";

export default function LogInRegister() {
    const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const {height, width} = useWindowDimensions();

	const handleSubmit = () => {
		console.log('Username:', username);
		console.log('Password:', password);
	};

  return (
    <View style={styles.container}>
	 	<Text style={styles.title}>S<Text style={styles.t}>T</Text>REAM<Text style={styles.plus}>+</Text></Text>
	 	<View style={styles.form}>
	 		<View style={styles.formField}>
	 			<Text style={styles.label}>Nombre de usuario:</Text>
	 			<TextInput
	 				style={styles.input}
	 				value={username}
	 				onChangeText={setUsername}
	 				placeholder='Ingrese su usuario...'
	 			/>
	 		</View>
	 		<View style={styles.formField}>
	 			<Text style={styles.label}>Contraseña:</Text>
	 			<TextInput
	 				style={styles.input}
	 				value={password}
	 				onChangeText={setPassword}
	 				placeholder='Ingrese su contraseña...'
	 				secureTextEntry={true}
	 			/>
	 		</View>
	 		<TouchableOpacity style={styles.button} onPress={handleSubmit}>
	 			<Text style={styles.buttonText}>Confirmar</Text>
	 		</TouchableOpacity>
	 	</View>
	 	<Svg style={styles.wave} height="150" width={width} viewBox={`0 0 ${width} 150`}>
     		<Path d={`M0 150 L0 0 C100 75 ${width / 1.5} 75 ${width} 75 L${width} 150 Z`} fill="#F7F0F0" />
	 	</Svg>
	 	<Text style={styles.tyc}>Términos & Condiciones</Text>	
	 	{/* Descomentar para ver el home */}
	 	{/* <Home /> */}
	 </View>
  )
}
