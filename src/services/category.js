const BASE_URL = "http://192.168.1.108:8080/streamplus/category/";
//BUSCAR EN IPCONFIG LA IPV4 Y REEMPLAZARLA POR localhost
const getCategories = async () => {
  const response = await fetch(`${BASE_URL}`, {
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
