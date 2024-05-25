import { StyleSheet } from "react-native-web";

export const styles = StyleSheet.create({
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