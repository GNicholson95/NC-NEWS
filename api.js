import axios from "axios";

export const fetchAllArticles = () => {
  return axios
    .get(`https://nc-news-s6au.onrender.com/api/articles`)
    .then((response) => {
      return response.data.articles;
    });
};

export const fetchArticle = (article_id) => {
    return axios
      .get(`https://nc-news-s6au.onrender.com/api/articles/${article_id}`)
      .then(({data: {article}}) => {
        return article;
      });
  };

  export const fetchComments = (article_id) => {
    return axios
      .get(`https://nc-news-s6au.onrender.com/api/articles/${article_id}/comments`)
      .then(({data: {comments}}) => {
        return comments;
      });
  };