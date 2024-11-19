import React, { useEffect, useRef, useState } from 'react'
import './VotePage.css'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
export default function VoteComponent(props) {

  const [votes, setVotes] = useState([]);
  const [isPlaying, setIsPlaying] = useState(true);
  const num = useRef(0);

  useEffect(() => {
    const fetchVotes = async () => {
      try {
        // Reference the "votes" collection
        const querySnapshot = await getDocs(collection(db, "votes"));
        
        // Map through the documents and extract the data
        const votesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        
        // Set the state with the fetched votes data
        setVotes(votesData);
      } catch (error) {
        console.error("Error fetching votes data:", error);
      }
    };

    fetchVotes();
  }, []);
console.log(votes);

function incrementVote() {
  setVotes((prevVotes) =>
    prevVotes.map((vote) => {
      if (vote.id === "1" && props.name === "Luffy") {
        return { ...vote, luffy: vote.luffy + 1 };
      } else if (vote.id === "2" && props.name === "Shanks") {
        return { ...vote, shanks: vote.shanks + 1 };
      } else if (vote.id === "3" && props.name === "Zoro") {
        return { ...vote, zoro: vote.zoro + 1 };
      } else if (vote.id === "4" && props.name === "Chopper") {
        return { ...vote, chopper: vote.chopper + 1 };
      } else {
        return vote; 
      }
    })
  );
}
 function decrementVote(){
  setVotes((prevVotes) =>
    prevVotes.map((vote) => {
      if (vote.id === "1" && props.name === "Luffy") {
        return { ...vote, luffy: vote.luffy - 1 };
      } else if (vote.id === "2" && props.name === "Shanks") {
        return { ...vote, shanks: vote.shanks - 1 };
      } else if (vote.id === "3" && props.name === "Zoro") {
        return { ...vote, zoro: vote.zoro - 1 };
      } else if (vote.id === "4" && props.name === "Chopper") {
        return { ...vote, chopper: vote.chopper - 1 };
      } else {
        return vote; 
      }
    })
  );
 }
 const togglePlayPause = () => {
  setIsPlaying(prevState => !prevState); 
};

const handleClick = () => {
  if (isPlaying) {
    incrementVote(); 
    num.current = num.current + 1; 
  } else {
    decrementVote(); 
    num.current = num.current - 1; 
  }

  togglePlayPause(); 
};
function Vote() {
  const currentVote = setVotes((prevVotes) =>
    prevVotes.map((vote) => {
      if (vote.id === "1" && props.name === "Luffy") {
        return vote.luffy;
      } else if (vote.id === "2" && props.name === "Shanks") {
        return vote.shanks;
      } else if (vote.id === "3" && props.name === "Zoro") {
        return vote.zoro;
      } else if (vote.id === "4" && props.name === "Chopper") {
        return vote.chopper;
      } else {
        return vote; 
      }
    })
  );
  return currentVote;
 }
  return (
   <>
    <div className='container1'>
   <label className='label1'> Votes :{num.current } </label>
   <img className='img' src={props.src}/>
   <label className='label1' >{props.name}</label>
   <button className='button1' onClick={handleClick}>{isPlaying ? 'Vote' : 'UnVote'}</button>
   </div>
   </>
  )
}
