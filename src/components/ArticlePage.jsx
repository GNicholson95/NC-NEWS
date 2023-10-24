import { useEffect, useState } from "react"
import { fetchArticle } from "../../api";
import { useParams } from "react-router-dom";
import Article from "./Article";

const ArticlePage = () => {
    const { article_id } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [article, setArticle] = useState({})

    useEffect(()=> {
      fetchArticle(article_id)
      .then((fetchedArticle)=> {
        console.log(fetchedArticle);
        setArticle(fetchedArticle)
        setIsLoading(false)
      }).catch((error) => {
      console.error("Error fetching items:", error);
      setIsLoading(false)
    });
  }, [article_id])

  if (isLoading) {
    return <p>loading...</p>;
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
                <h3>Author: {article.author}</h3>
                <h4>Created at: {article.created_at}</h4>
                <p>{article.body}</p>
            </main>

        

        </div>
       </>
        
    )
}

export default ArticlePage

