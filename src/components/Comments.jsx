import { useEffect, useState } from "react";
import { fetchComments } from "../../api";
import Comment from "./Comment";
import Loader from "./Loader";
import AddComment from "./AddComment";

const Comments = ({ article_id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments(article_id)
      .then((fetchedComments) => {
        setComments(fetchedComments);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="main-comment-container">
      <h2>Comments</h2>
        <AddComment
          comments={comments}
          setComments={setComments}
          article_id={article_id}
        />
        {comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
    </>
  );
};

export default Comments;
