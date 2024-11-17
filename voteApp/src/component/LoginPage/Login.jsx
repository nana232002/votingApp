
import React, { useEffect, useState } from "react";
import "./Login.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const users = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(users);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  function checkUser(userMail, userPassword) {
    return data.some(
      (user) => user.email === userMail && user.password === userPassword
    );
  }

  const handleLogin = () => {
    if (checkUser(email, password)) {
      setLoginSuccess(true); 
      navigate("/vote");// Update state if login is successful
    } else {
      setLoginSuccess(false); // Update state if login fails
    }
  };

  return (
    <>
      <div className="container">
        <img className="image" src="/images/votelogo.jpg" alt="Logo" />
        <label className="label">Email</label>
        <input className="input" type="email" name="user" required
          onChange={(event) => setEmail(event.target.value)}
        />
        <label className="label">Password</label>
        <input className="input" type="password" name="user" required
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="button" onClick={handleLogin}>
          Log In
        </button>
        {loginSuccess === true && <p className="success">Login successful!</p>}
        {loginSuccess === false && <p className="error">Wrong information</p>}
      </div>
    </>
  );
}
