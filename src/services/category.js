import { BASE_URL } from "../config/config";

const getCategories = async () => {
  const response = await fetch(`${BASE_URL}/streamplus/category/`, {
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

export default {
  getCategories,
};
