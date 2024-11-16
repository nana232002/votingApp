import React from 'react'
import './VotePage.css'
export default function VoteComponent(props) {
  return (
   <>
    <div className='container1'>
   <label className='label1'>Vote : 0</label>
   <img className='img' src={props.src}/>
   <label className='label1' >{props.name}</label>
   <button className='button1' onClick={()=>{
    console.log("vote")
    
     props.num +1 
   }} >Vote</button>
   </div>
   </>
  )
}
