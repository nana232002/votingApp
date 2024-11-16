import React from 'react'
import VoteComponent from './VoteComponent';

export default function VotePage() {
  return (
   <>
   <div className='navbar'>
    <img className='logo' src='/images/votelogo.jpg'/>
    <div className='buttons'>
    <select id="select"> 
    <option >admin name</option>
    <option >log out</option>
    <option >admin</option>
      </select>
    </div>
   </div>

   <div className='body'>
    <label className='label2'>VOTE</label>
    <div className='votingcharacter'>
    <VoteComponent src='/images/luffy1.webp' name ="Luffy" num ="0"/>
    <VoteComponent src='/images/shanks.jpg' name ="Shanks" num ="0"/>
    <VoteComponent src='/images/zoro1.jpg' name ="Zoro" num ="0"/>
    <VoteComponent src='/images/chopper1.gif' name ="Chopper" num ="0"/>
    </div>
   </div>
   </>
  )
}
