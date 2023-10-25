import { useEffect, useState } from "react"
import { fetchArticle } from "../../api";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import Loader from "./Loader";
import Votes from "./Votes";

const ArticlePage = () => {
    const { article_id } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [article, setArticle] = useState({})

    useEffect(()=> {
      fetchArticle(article_id)
      .then((fetchedArticle)=> {
        setArticle(fetchedArticle)
        setIsLoading(false)
      }).catch((error) => {
      console.error("Error fetching items:", error);
      setIsLoading(false)
    });
  }, [article_id])

  if (isLoading) {
    return <Loader />
  }

  const headerStyle = {
    backgroundImage: `url(${article.article_img_url})`,
  };

    return (
       <>
        <div className="main-container">
        <section className="single-article-header"  style={headerStyle}>
            <h2 className = 'header-2'>{article.title}</h2>
            </section>
            <main className="single-article-main">
              <section className="sub-header">
                <div>
                <h3>Author: {article.author}</h3>
                <h4>Created at: {article.created_at}</h4>
                </div>
                <Votes article={article}/>
              </section>
              
                <p>{article.body}</p>
            </main>
            <Comments article_id={article_id}/>

        

        </div>
       </>
        
    )
}

export default ArticlePage

