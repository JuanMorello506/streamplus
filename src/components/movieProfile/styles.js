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
    borderTopColor: '#FFFFFF',
    borderStyle: 'solid',
    borderWidth: 1,
    margin: 5,
  },
});
