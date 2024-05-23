import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    video: {
        flex: 1,
        alignSelf: 'stretch',
        width: '100%',
        height: '100%',
    },
    controls: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        bottom: 10,
        left: 10,
        right: 10,
    },
    controlButton: {
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.7)', //color blanquito medio transparente
        borderRadius: 5,
    },
    controlText: {
        color: 'black',
        fontSize: 16,
    },
    sliderContainer: {
        position: 'absolute',
        bottom: 40,
        left: 10,
        right: 10,
    },
    slider: {
        height: 40,
    },
    thumbStyle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: 'purple',
    },
    trackStyle: {
        height: 4, 
        borderRadius: 2,
        backgroundColor: 'transparent', 
    },
});
