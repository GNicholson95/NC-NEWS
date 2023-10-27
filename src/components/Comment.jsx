
const Comment = ( props ) => {
    return (
      <div className="comment-container">
        <p>{props.comment.created_at}</p>
     <h4>{props.comment.author}</h4>
     <div className="comment-info">
     <p>{props.comment.body}</p>
     <p className="votes">Votes: {props.comment.votes}</p>
     </div>
   </div>
    );
  }
  
  export default Comment;