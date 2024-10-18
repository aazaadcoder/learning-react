import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";

const Login = () => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const { setUser } = useContext(UserContext);

  const submitHandle = (e)=>{
    e.preventDefault()
    setUser({userName, password})
  }
  return (
    <>
      <input
        placeholder="userName"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        type="text"
      />
      <input
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="text"
      />
      <button onClick={submitHandle}>Submit</button>
    </>
  );
};


export default Login;