import React, {useEffect,useContext} from 'react'
import MovieContext from '../../services/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import {View, Text } from "react-native";

const LoadingScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  };

  export default LoadingScreen
  