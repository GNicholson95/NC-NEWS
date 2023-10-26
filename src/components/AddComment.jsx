import { useState } from "react";
import { postComment } from "../../api";

const AddComment = ({article_id}) => {
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(article_id, userInput)
  };

  return (
    <form className="add-comments" onSubmit={handleSubmit}>
      <label >Comment:</label>
      <input
        type='text'
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        id='comment'
        placeholder='Enter your comment.'
      />
      <button className='form-button' type='submit'>↩︎</button>
    </form>
  );
};

export default AddComment;
