import {
    StyleSheet,
  } from "react-native";

  export const styles = StyleSheet.create({
    conatainer:{
      flex:1,
      padding: 20,
      backgroundColor: "#14111C",
    },

    text:{
      color:'#FFFFFF',
      margin:10,
    },

    details:{
      backgroundColor: '#332B47',
      flex:1,
      borderRadius: 10,
    },

    detail:{
      flexDirection: 'row',     
      flexWrap: 'wrap',          
      margin: 10,
    },

    movieDetail:{
      margin:10,
    },

    movieDetailText:{
      margin:3,
    },

    imageContainer: {
      width: '48%',              
      marginBottom: 10,          
    },
  
    image: {
      width: '80%',             
      height: 180,
      borderRadius: 5,
    },
  });