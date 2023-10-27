import { useState } from "react";
import { postComment } from "../../api";

const AddComment = ({ comments, setComments, article_id }) => {
  const [userInput, setUserInput] = useState("");
  const [successfullPost, setSuccessfullPost] = useState(false);
  const [error , setError] = useState('')
  const [submitting, setsubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    const optimisticComment = {
      author: "grumpy", //user im using for the post
      body: userInput,
      created_at: new Date().toISOString(),
      votes: 0, // assuming initial votes count
    };

    setsubmitting(true) 

    setComments((comments) => [optimisticComment, ...comments]);

    postComment(article_id, userInput)
      .then((postedComment) => {
        setComments((comments) => [postedComment, ...comments]);
        setSuccessfullPost(true);
        setError(''); // Clear any previous error
        setUserInput('')
        setsubmitting(false)
      })
      .catch((error) => {
        console.error("Error posting comment:", error);
        setSuccessfullPost(false); // Set to false in case of an error
        setError('Failed to post, please try again');
      });
  };

  return (
    <>
    <form className="add-comments" onSubmit={handleSubmit}>
      <label>Comment:</label>
      <input required
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        id="comment"
        placeholder="Enter your comment."
      />
      <button className="form-button" type="submit" disabled={submitting}>
        ↩︎
      </button>
    </form>
     {successfullPost && <p className="successfull-post">Comment posted successfully</p>}
     {error && <p className="error">{error}</p>}
     </>
  );
};

export default AddComment;
