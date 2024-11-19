import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import VoteComponent from './VoteComponent';

// Logout Button Component
const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign the user out
      console.log("User signed out");

      // Redirect to the homepage or login page after signing out
      navigate("/"); // Change this route to your login page if needed
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <button className='logout' onClick={handleLogout}>
      Logout
    </button>
  );
};

export default function VotePage() {
  const location = useLocation();
  const { user } = location.state || {};

  if (!user) {
    return <p>No user data found. Please log in again.</p>; // Handle missing state gracefully
  }

  console.log("User data:", user);

  return (
    <>
      <div className='navbar'>
        <img className='logo' src='/images/votelogo.jpg' alt="Logo" />
        <div className='buttons'>
          <LogoutButton /> 
        </div>
      </div>

      <div className='body'>
        <label className='label2'>VOTE</label>
        <div className='votingcharacter'>
          <VoteComponent src='/images/luffy1.webp' name="Luffy" />
          <VoteComponent src='/images/shanks.jpg' name="Shanks" />
          <VoteComponent src='/images/zoro1.jpg' name="Zoro" />
          <VoteComponent src='/images/chopper1.gif' name="Chopper" />
        </div>
      </div>
    </>
  );
}
