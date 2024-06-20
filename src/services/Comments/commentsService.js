import { BASE_URL } from "../../config/config";

export const getCommentByMovieId = async (movieId) => {
    const response = await fetch(`${BASE_URL}/streamplus/comment/movie/${movieId}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log("error", JSON.stringify(error));
        return error;
      });
    return response;
};

export const addComment = async (comment, rating, userId, movieId) => {
    const response = await fetch(`${BASE_URL}/streamplus/comment/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ comment, rating, userId, movieId }),
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log("error", JSON.stringify(error));
        return error;
      });
    return response;
};

export const removeComment = async (userId, movieId) => {
    const response = await fetch(`${BASE_URL}/streamplus/comment/${userId}/${movieId}`, {
      method: "DELETE",
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log("error", JSON.stringify(error));
        return error;
      });
    return response;
};