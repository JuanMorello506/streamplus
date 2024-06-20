import { BASE_URL } from "../../config/config";

export const getFavourites = async (id) => {
    const response = await fetch(`${BASE_URL}/streamplus/favourites/${id}`, {
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

export const addFavourites = async (userId, movieId) => {
    const response = await fetch(`${BASE_URL}/streamplus/favourites/${userId}/${movieId}`, {
      method: "POST",
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

export const removeFavourites = async (userId, movieId) => {
    const response = await fetch(`${BASE_URL}/streamplus/favourites/${userId}/${movieId}`, {
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

export const hasFavorite = async (id,movieId) => {
  const response = await fetch(`${BASE_URL}/streamplus/favourites/${id}/${movieId}`, {
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
