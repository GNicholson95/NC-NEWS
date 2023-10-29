import { useState, useEffect } from "react";
import { fetchArticlesByTopic } from "../../api";
import Article from "./Article";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import Sort from "./Sort"; 

const TopicArticles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortingValue, setSortingValue] = useState('Most recent');

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

  const sortArticles = () => {
    const sortedArticles = [...articles];
    if (sortingValue === 'Most recent') {
      sortedArticles.sort((a, b) => b.created_at - a.created_a); 
    } else if (sortingValue === 'Most popular') {
      sortedArticles.sort((a, b) => b.comment_count - a.comment_count); 
    }
    return sortedArticles;
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <h2 className="header-2">{topics}</h2>
      <Sort value={sortingValue} onChange={setSortingValue} />
      <div className="main-container">
        {sortArticles().map((article, index) => (
          <Article key={index} article={article} />
        ))}
      </div>
    </>
  );
};

export default TopicArticles;
