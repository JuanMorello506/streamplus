import React, { useState, useContext, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { addFavourites, removeFavourites, hasFavorite } from "../../services/Favourites/favouritesService";
import MovieContext from "../../services/AuthContext/index";

export default function MovieProfile({ route }) {
    const { id, img, title } = route.params;
    const synopsysMock = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
    const [showMore, setShowMore] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const navigation = useNavigation();
    const { authData } = useContext(MovieContext);
    const userId = authData.data.id;

    const handlePress = () => {
        console.log('pressed');
        navigation.navigate('VideoComponent');
    };

    const toggleFavorite = () => {
        if (isFavorite) {
            removeFavourites(userId, id);
        } else {
            addFavourites(userId, id);
        }
        setIsFavorite(!isFavorite);
    };

    useEffect(() => {
        const checkIfFavorite = async () => {
            try {
                const {isFavourite} = await hasFavorite(userId, id);
                setIsFavorite(isFavourite);
                console.log("LA DATA DE HASFAVORITE ES: " + JSON.stringify(isFavourite));
            } catch (error) {
                console.error('Error checking favorite status:', error);
            }
        };

        checkIfFavorite();
    }, [id]);

    return (
        <View style={styles.conatainer}>
            <Text style={styles.mainTitle}>{title}</Text>
            <View style={styles.details}>
                <View style={styles.detail}>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: img }} style={styles.image} />
                    </View>
                    
                    <View style={styles.movieDetail}>
                        <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteIcon}>
                            <Image 
                                source={{
                                    uri: isFavorite ? 'https://icon-library.com/images/star-icon-png/star-icon-png-21.jpg' : 'https://icon-library.com/images/star-icon-png/star-icon-png-16.jpg'
                                }} 
                                style={styles.star}
                            />
                        </TouchableOpacity>
                        <Text style={styles.movieDetailText}>Rating: <Text style={styles.detailInfo}>9.02</Text></Text>
                        <Text style={styles.movieDetailText}>Rank: <Text style={styles.detailInfo}>1</Text></Text>
                        <Text style={styles.movieDetailText}>Duration: <Text style={styles.detailInfo}>2hrs</Text></Text>
                        <Text style={styles.movieDetailText}>Fav: <Text style={styles.detailInfo}>2000</Text></Text>
                        <Text style={styles.movieDetailText}>Status: <Text style={styles.detailInfo}>finished</Text></Text>
                        <Text style={styles.movieDetailText}>Seasons: <Text style={styles.detailInfo}>0</Text></Text>
                    </View>
                </View>
                
                <Text style={styles.synopsis}>
                    {showMore ? synopsysMock : synopsysMock?.substring(0, 250) + '...'}
                    <TouchableOpacity style={styles.touchAble} onPress={() => setShowMore(!showMore)}>
                        <Text style={styles.buttonText}>{showMore ? 'Show Less' : 'Read More'}</Text>
                    </TouchableOpacity>
                </Text>

                <Text style={styles.text}>Watch now</Text>
                
                <TouchableOpacity style={styles.watchNow} onPress={handlePress} />

                <Text style={styles.text}>Comments</Text>
                <View style={styles.commentsContainer}></View>
            </View>
        </View>
    );
}
