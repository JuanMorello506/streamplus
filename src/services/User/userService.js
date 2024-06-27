import { BASE_URL } from "../../config/config";

export const getUserById = async (userId) => {
  const response = await fetch(`${BASE_URL}/streamplus/user/${userId}`, {
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

export const updateUser = async (userId, userName, mail) => {
  const response = await fetch(`${BASE_URL}/streamplus/user/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, userName, mail }),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log("error", JSON.stringify(error));
      return error;
    });
  return response;
};
