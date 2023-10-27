
const Comment = ( props ) => {
  console.log(props.comment.created_at);
  const createdAt = new Date(props.comment.created_at);
  const formattedDate = createdAt.toLocaleString();
    return (
      <div className="comment-container">
        <p>Posted: {formattedDate}</p>
     <h4>{props.comment.author}</h4>
     <div className="comment-info">
     <p>{props.comment.body}</p>
     <p className="votes">Votes: {props.comment.votes}</p>
     </div>
   </div>
    );
  }
  
  export default Comment;