import { useEffect, useState } from "react"
import { fetchComments } from "../../api";
import Comment from "./comment";
import Loader from "./Loader";

const Comments= ({ article_id }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [comments, setComments] = useState({})

    useEffect(()=> {
      fetchComments(article_id)
        .then((fetchedComments)=> {
        setComments(fetchedComments)
        setIsLoading(false)
      }).catch((error) => {
      console.error("Error fetching items:", error);
      setIsLoading(false)
    });
  }, [article_id])

  if (isLoading) {
    return <Loader />
  }

    return (
       <>
        <h2>Comments</h2>
       <div className="main-container">
       
        
        {comments.map((comment, index) => (
           <Comment key={index} comment={comment}/>
            ))}
        </div>
       </>
        
    )
}

export default Comments

