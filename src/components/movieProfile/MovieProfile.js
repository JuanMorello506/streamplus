import React,{ useState } from "react";
import { View,Text, Image, Button, TouchableOpacity} from "react-native";
import {styles} from './styles'

export default function MovieProfile({route}) {
    const {img, title} = route.params
    const synopsysMock = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    const [showMore, setShowMore] = useState(false);
  return (
    <View style={styles.conatainer}>
        <Text style={styles.mainTitle}>{title}</Text>
        <View style={styles.details}>
            <View style={styles.detail}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: img }} style={styles.image}></Image>
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
