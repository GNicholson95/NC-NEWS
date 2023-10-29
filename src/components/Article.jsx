import { Link } from "react-router-dom"

const Article = ( props ) => {
    return (
      <div className="article">
      <img src={props.article.article_img_url} alt="article image" />
      <Link to={`/article/${props.article.article_id}`}>
     <h3>{props.article.title}</h3>
     </Link>
     <div className="info">
     <p>Topic: {props.article.topic}</p>
     <p>Author: {props.article.author}</p>
     <p>💬: {props.article.comment_count}</p>
     <p>votes: {props.article.votes}</p>
     </div>
   </div>
    );
  }
  
  export default Article;