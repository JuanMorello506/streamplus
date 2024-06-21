import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native'; // Corrected import
import { getUserById } from '../../services/User/userService';
import { styles } from './styles';

const Comments = ({ item }) => {
    const [user, setUser] = useState({});
    const {userId,comment} = item
    useEffect(() => {
        const getUser = async () => {
            try {
                const {message} = await getUserById(userId);
                console.log("el user en el comments es: " + JSON.stringify(message));
                setUser(message);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
        getUser();
    }, [item.userId]);

    return (
        <View style={styles.commentItem}>
            <Image source={{ uri: 'https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png' }} style={styles.userAvatar} />
            <Text style={styles.commentText}>{user.userName}:</Text>
            <Text style={styles.commentText}>{comment}</Text>
        </View>
    );
};

export default Comments;
