import React, { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from "react-native";
import { Video as ExpoVideo } from 'expo-av'; // Reproductor de video
import * as ScreenOrientation from 'expo-screen-orientation'; // Orientación de la pantalla
import Slider from '@react-native-community/slider'; // Barra de reprudccion slider
import { styles } from './styles'; 

export default function VideoComponent() {
    const video = useRef(null);
    const [status, setStatus] = useState({});
    const [currentVideoUri, setCurrentVideoUri] = useState('http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4');
    const [sliderValue, setSliderValue] = useState(0);
    const [showControls, setShowControls] = useState(false);
    const [isSliding, setIsSliding] = useState(false);

    useEffect(() => {
        // Bloquear la orientación a horizontal cuando el componente se monta
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

        return () => {
            // Restablecer la orientación predeterminada cuando el componente se desmonta
            ScreenOrientation.unlockAsync();
        };
    }, []);

    const onPlaybackStatusUpdate = (playbackStatus) => {
        setStatus(playbackStatus);
        if (!isSliding) {
            setSliderValue(playbackStatus.positionMillis / playbackStatus.durationMillis); 
        }
    };

    // Mostrar u ocultar los controles del video
    const handleVideoPress = () => {
        if (showControls) {
            setShowControls(false); 
        } else {
            setShowControls(true); 
        }
    };

    const handleSlidingStart = () => {
        setIsSliding(true);
    };

    const handleSlidingComplete = async (value) => {
        setIsSliding(false);
        const newPositionMillis = value * status.durationMillis;
        await video.current.setPositionAsync(newPositionMillis);
    };

    return (
        <View style={styles.container}>
            <ExpoVideo
                ref={video}
                style={styles.video}
                source={{
                    uri: currentVideoUri,
                }}
                useNativeControls={false}
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={onPlaybackStatusUpdate}
                onTouchStart={handleVideoPress}
            />
            {showControls && (
                <View style={styles.controls}>
                    <TouchableOpacity
                        onPress={() => {
                            if (status.isPlaying) {
                                video.current.pauseAsync();
                            } else {
                                video.current.playAsync();
                            }
                        }}
                        style={styles.controlButton}
                    >
                        <Text style={styles.controlText}>
                            {status.isPlaying ? 'Pause' : 'Play'}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => video.current.replayAsync()}
                        style={styles.controlButton}
                    >
                        <Text style={styles.controlText}>Replay</Text>
                    </TouchableOpacity>
                </View>
            )}
            {showControls && (
                <View style={styles.sliderContainer}>
                    <Slider
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={1}
                        value={sliderValue}
                        onValueChange={setSliderValue}
                        onSlidingStart={handleSlidingStart}
                        onSlidingComplete={handleSlidingComplete}
                        minimumTrackTintColor="purple"
                        maximumTrackTintColor="gray" 
                        thumbTintColor="white" 
                        thumbStyle={styles.thumbStyle}
                        trackStyle={{ height: 12, borderRadius: 6 }}
/>

                </View>
            )}
            <StatusBar style="auto" />
        </View>
    );
}
