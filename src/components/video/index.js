import React from "react";
import { View, Button, StatusBar } from "react-native";
import { Video as ExpoVideo } from 'expo-av';
import { styles } from "./styles";

export default function VideoComponent() {  
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return (
        <View style={styles.container}>
            <ExpoVideo
                ref={video}
                style={styles.video}
                source={{
                    uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <View style={styles.buttons}>
                <Button title="Reproducir del segundo 5" onPress={() => video.current.playFromPositionAsync(5000)}/>
                <Button title="Pausa" onPress={() => video.current.pauseAsync()}/>
                <Button title={status.isLooping ? "Que no haga loop" : "Que haga loop"} onPress={() => video.current.setIsLoopingAsync(!status.isLooping)}/>
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}
