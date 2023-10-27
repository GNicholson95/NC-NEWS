import { useState, useEffect } from "react";
import { fetchArticlesByTopic } from "../../api";
import Article from "./Article";
import Loader from "./Loader";
import { useParams } from "react-router-dom";

const TopicArticles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let { topics } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchArticlesByTopic()
      .then((allArticles) => {
        const filteredArticles = allArticles.filter(
          (article) => article.topic === topics
        );
        setIsLoading(false);
        setArticles(filteredArticles);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  }, [topics]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <h2 className="header-2">{topics}</h2>
      <div className="main-container">
        {articles.map((article, index) => (
          <Article key={index} article={article} />
        ))}
      </div>
    </>
  );
};

export default TopicArticles;
