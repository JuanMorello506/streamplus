import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	modalOverlay: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.1)",
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
	modalView: {
		width: 179,
		height: 262,
		backgroundColor: "#D9D9D9",
		borderRadius: 10,
		alignItems: "center",

		shadowColor: '#FFF',
		elevation: 15,
	},
	divider: {
		height: 1,
		backgroundColor: 'grey',
		marginVertical: 10,
	},
	categoryButton: {
		padding: 10,
		backgroundColor: 'grey',
		borderRadius: 5,
		width: "100%",
		height: "100%",
		flex: 1,
	},
	categoryText: {
		color: 'black',
		fontSize: 16,
		fontFamily: 'Helvetica',
	},
	scroll: {
		width: "100%",
		height: "100%",
	},
});
