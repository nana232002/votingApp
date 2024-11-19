
// import React, { useEffect, useState } from "react";
// import "./Login.css";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../firebaseConfig";
// import { useNavigate } from "react-router-dom";
// import { auth} from "../firebaseConfig";
// import { signInWithEmailAndPassword } from "firebase/auth";

// export default function Login() {
//   const [data, setData] = useState([]);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   // const [loginSuccess, setLoginSuccess] = useState(null); 
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "users"));
//         const users = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setData(users);
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       }
//     };

//     fetchData();
//   }, []);

//   // function checkUser(userMail, userPassword) {
//   //   return data.some(
//   //     (user) => user.email === userMail && user.password === userPassword
//   //   );
//   // }

//   const handleLogin = async (e) => {
//     e.preventDefault();
  
//     if (!email || !password) {
//        setError("Email and password are required.");
//       return;
//     }
  
//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
  
//       navigate("/vote");
//     } catch (err) {
//        setError("Invalid email or password.");
//     }
//   };

//   // const handleLogin = () => {
//   //   if (checkUser(email, password)) {
//   //     setLoginSuccess(true); 
//   //     navigate("/vote");// Update state if login is successful
//   //   } else {
//   //     setLoginSuccess(false); // Update state if login fails
//   //   }
//   // };

//   return (
//     <>
//       <div className="container">
//         <img className="image" src="/images/votelogo.jpg" alt="Logo" />
//         <label className="label">Email</label>
//         <input className="input" type="email" name="user" required
//           onChange={(event) => setEmail(event.target.value)}
//         />
//         <label className="label">Password</label>
//         <input className="input" type="password" name="user" required
//           onChange={(event) => setPassword(event.target.value)}
//         />
//         <button className="button" onClick={handleLogin}>
//           Log In
//         </button>
//         {loginSuccess === false && <p className="error">Wrong information</p>}
//       </div>
//     </>
//   );
// }


import React, { useState } from "react";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { setPersistence, browserSessionPersistence } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }
  
    console.log("Attempting to log in with:", email, password);
  
    try {
      
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in as:", userCredential.user);

      const userData = {
        email: userCredential.user.email,
        status: userCredential.user.status,
      };
  
      // Navigate to the vote page with serialized user data
      navigate("/vote", { state: { user: userData } });

    } catch (err) {
      console.error("Login error:", err.message);
      setError("Invalid email or password.");
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
        {error && <p className="error">{error}</p>}
      </div>
    </>
  );

}
