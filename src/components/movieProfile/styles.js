import {
    StyleSheet,
  } from "react-native";

  export const styles = StyleSheet.create({
    conatainer:{
      flex:1,
      padding: 20,
      backgroundColor: "#14111C",
    },

    mainTitle:{
      color:'#FFFFFF',
      margin:10,
      fontSize:18
    },

    text:{
      color:'#FFFFFF',
      margin:10,
      fontSize:17,
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
      color: '#FFFFFF',
    },

    detailInfo:{
      color: '#D9D8D8',
    
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

    synopsis:{
      color: '#FFFFFF',
      margin: 10,
    },

    watchNow:{
      flex:0.5,
      margin:30,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000000',
      borderColor: '#8F78C6',
      borderStyle: 'solid',
      borderWidth:8,
      

    },

    buttonText:{
      fontSize: 10,
      color: '#D9D8D8'
      
    },

    video:{
      flex:1,
    },

    comentsContainer:{
      borderTopColor: '#FFFFFF',
      borderStyle: 'solid',
      borderWidth:1,
      margin: 5
    },
  });