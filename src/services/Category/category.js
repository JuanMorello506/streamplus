import { BASE_URL } from "../../config/config";

export const getCategories = async (setCategories, setIsLoading) => {
    fetch(`${BASE_URL}/streamplus/category/`, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la petición");
        }
        return response.json();
      })
      .then((response) => {
        const { message } = response;
        setCategories(message);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error", JSON.stringify(error));
      });
  };