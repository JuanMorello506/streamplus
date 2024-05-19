import React,{ useState } from "react";
import { View,Text, Image, Button, TouchableOpacity} from "react-native";
import {styles} from './styles'

export default function index() {
    const synopsysMock = 'Sitting on a bench in Savannah, Georgia, Forrest Gump waits for the bus. While it takes him a while to arrive, the young man tells his life to the people who sit and wait with him. Although he suffers from a slight mental retardation, this does not prevent him from doing wonderful things. Without fully understanding what is happening around him, Forrest takes sides in the most important events in American history.'
    const [showMore, setShowMore] = useState(false);
  return (
    <View style={styles.conatainer}>
        <Text style={styles.mainTitle}>Titulo pelicula</Text>
        <View style={styles.details}>
            <View style={styles.detail}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: 'https://i.pinimg.com/736x/a8/39/7d/a8397dcfdf56fc342c3712a91e186575.jpg' }} style={styles.image}></Image>
                </View>
                
                <View style={styles.movieDetail}>
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
            <View style={styles.watchNow}>
                <View style={styles.video}>

                </View>
            </View>

            <Text style={styles.text}>Comments</Text>
            <View style={styles.comentsContainer}></View>
        </View>
    </View>
  )
}
