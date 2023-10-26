import { useState } from "react";
import { patchVote } from "../../api";

const Votes = ( {article} ) => {
    let [userVotes, setUserVotes] = useState (0)
    const [votingError, setVotingError] = useState(null);

    const handleVote =(value)=>{
        setUserVotes(userVotes + value);
         patchVote(article, value)
         .catch((error) => {
            setUserVotes(userVotes - value);
            setVotingError("Sorry failed to vote. Please try again.");
            console.error("Error voting on article:", error);
          });
    }

    return (
        <div className="votes-container">
        <button
        disabled = {userVotes === -1}
         onClick={()=>{
            handleVote(-1)
        }}>
            -
        </button>
        <p>Votes: {article.votes + userVotes}</p>
        <button
        disabled = {userVotes === 1}
         onClick={()=>{
            handleVote(1)
        }}>
            +
        </button>
        {votingError !== null ? <p>{votingError}</p> : null}
        </div>
    );
  }
  
  export default Votes;