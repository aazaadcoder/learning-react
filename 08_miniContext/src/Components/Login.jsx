import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";
 function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({userName, password})// PASSING A OBJECT HERE IN USER 

  };

  return (
    <div>
      <h2>LogIn</h2>
      <input
        type="text"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);

        }}
        placeholder="userName"
      />

      <input
        type="text"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
