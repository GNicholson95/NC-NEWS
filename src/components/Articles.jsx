import { useState, useEffect } from "react";
import { fetchAllArticles } from "../../api";
import Article from "./Article";
import Loader from "./Loader";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true); //important! it makes the code wait for the items to load
    fetchAllArticles()
      .then((articles) => {
        setIsLoading(false);
        setArticles(articles);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <h2 className="header-2">Articles</h2>
      <div className="main-container">
        {articles.map((article, index) => (
          <Article key={index} article={article} />
        ))}
      </div>
    </>
  );
};

export default Articles;
