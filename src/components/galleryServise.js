import axios from "axios";
export const fetchGallery = async (topic, currentPage) => {
  //Чекаємо поки аксіос поверне проміс
  const response = await axios.get("https://api.unsplash.com/search/photos/", {
    params: {
      client_id: "e-OxTi7jB5Lw2fezhmtzxw7sOMUnWhDfv618Uj9VqNE",
      query: topic,
      page: currentPage,
      per_page: 12,
    },
    //Коли поверне проміс повернеться відповідь
  });
  return response.data.results;
};
