
const Votes = ( props ) => {
    console.log('im vote prop :', props);
    return (
        <div className="votes-container">
        <p>Votes: {props.article.votes}</p>
        </div>
    );
  }
  
  export default Votes;