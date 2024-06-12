import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		padding: 10,
		backgroundColor: "#2196F3",
	},
	modalOverlay: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
	modalView: {
		width: 350,
		height: 400,
		backgroundColor: "#00072B",
		borderRadius: 10,
		alignItems: "center",

		shadowColor: '#FFF',
		elevation: 15,
	},
	image: {
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		position: "relative",
		width: '100%',
		height: '40%',
  	},
	playButton: {
		position: "absolute",
		top: -20,
		right: 20,

		padding: 10,
		backgroundColor: "#2196F3",
		borderRadius: 100,
  	},
	modalInfo: {
		position: 'relative',
		width: '100%',
		height: '60%',
		padding: 15,
	},
	modalTitle: {
		color: "white",
		fontSize: 25,
		marginBottom: 10,
		fontFamily: "Helvetica",
		fontWeight: "bold",
		width: '90%',
	},
	modalDirectedBy: {
		color: "white",
		fontSize: 20,
		marginBottom: 10,
		fontWeight: "bold",
	},
	info: {
		width: "100%",
		height: '100%',
  	},
	modalText: {
		marginBottom: 15,
		color: "white",
	},

	// No se usan?
	closeButton: {
		padding: 10,
		backgroundColor: "#2196F3",
		borderRadius: 10,
	},
	buttons: {
		flexDirection: "row",
		alignSelf: "flex-end",
  	},
});
