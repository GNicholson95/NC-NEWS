
const Article = ( props ) => {
    // console.log(props,"item props");
    return (
      <div className="article">
         <img src={props.article.article_img_url} alt="article image" />
        <h3>{props.article.title}</h3>
        <div className="info">
        <p>Topic: {props.article.topic}</p>
        <p>Author: {props.article.author}</p>
        <p>💬: {props.article.comment_count}</p>
        </div>
      </div>
    );
  };
  
  export default Article;