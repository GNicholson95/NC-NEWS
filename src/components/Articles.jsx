import { useState, useEffect } from "react";
import { fetchAllArticles } from "../../api";
import Article from "./Article";
import Loader from "./Loader";
import Sort from "./Sort";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortingValue, setSortingValue] = useState('Most recent');

  useEffect(() => {
    setIsLoading(true);
    fetchAllArticles()
      .then((articles) => {
        setIsLoading(false);
        setArticles(articles);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  }, []);

   const sortArticles = () => {
    const sortedArticles = [...articles];
    if (sortingValue === 'Most recent') {
      sortedArticles.sort((a, b) => b.created_at - a.created_a); 
    } else if (sortingValue === 'Most comments') {
      sortedArticles.sort((a, b) => b.comment_count - a.comment_count); 
    } else if (sortingValue === 'Most votes') {
      sortedArticles.sort((a, b) => b.votes - a.votes);
    }
    return sortedArticles;
  };

  if (isLoading) {
    return <Loader />;
  }
  console.log(articles);
  return (
    <>
      <h2 className="header-2">Articles</h2>
      <Sort value={sortingValue} onChange={setSortingValue} />
      <div className="main-container">
        {sortArticles().map((article, index) => (
          <Article key={index} article={article} />
        ))}
      </div>
    </>
  );
};

export default Articles;
