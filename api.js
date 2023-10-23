import axios from "axios";

export const fetchAllArticles = () => {
  return axios
    .get(`https://nc-news-s6au.onrender.com/api/articles`)
    .then((response) => {
      console.log(response.data.articles);
      return response.data.articles;
    });
};