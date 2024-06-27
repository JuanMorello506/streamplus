import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#14111C",
  },
  mainTitle: {
    color: '#FFFFFF',
    margin: 10,
    fontSize: 18,
  },
  text: {
    color: '#FFFFFF',
    margin: 10,
    fontSize: 17,
  },


  details: {
    backgroundColor: '#332B47',
    flex: 1,
    borderRadius: 10,
  },
  detail: {
    flexDirection: 'row',
    margin: 10,
    position: 'relative',
  },
  movieDetail: {
    margin: 10,
    flex: 1,
  },
  movieDetailText: {
    margin: 3,
    color: '#FFFFFF',
  },
  detailInfo: {
    color: '#D9D8D8',
  },
  imageContainer: {
    width: '48%',
    marginBottom: 10,
  },
  image: {
    width: '80%',
    height: 180,
    borderRadius: 10,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  star: {
    width: 30,
    height: 30,
  },
  synopsis: {
    color: '#FFFFFF',
    margin: 10,
  },
  touchAble: {
    padding: 5,
  },
  buttonText: {
    fontSize: 14,
    color: '#AD92F1',
  },
  watchNow: {
    flex: 0.5,
    margin: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderColor: '#8F78C6',
    borderStyle: 'solid',
    borderWidth: 8,
  },
 

  commentsContainer: {
    flex: 1,
    marginTop: 20,
    borderTopColor: '#FFFFFF',
    borderStyle: 'solid',
    borderColor:"white"
},
commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
},
userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    marginLeft: 8,
},
commentInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    
},
commentButton: {
    marginLeft: 8,
    marginRight: 8,
    backgroundColor: '#8F78C6',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
},
commentButtonText: {
    color: '#fff',
    fontWeight: 'bold',
},
commentList: {
    flex: 1,
    marginLeft:15,
},

});
