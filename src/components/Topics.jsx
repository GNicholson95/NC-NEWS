import { useState, useEffect } from "react";
import { fetchAllTopics } from "../../api";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchAllTopics()
      .then((allTopics) => {
        setIsLoading(false);
        setTopics(allTopics);
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
      <h2 className='topics-header'>Topics</h2>        
      <div className="topics-container">
        {topics.map((topic) => (
             <Link className="topic-link"
             to={`/Topics/${topic.slug}`}
             key={topic.slug}
             topic={topic}
           >
             <h2>{topic.slug}</h2>
           </Link>
        ))}
      </div>
    </>
  );
};


export default Topics