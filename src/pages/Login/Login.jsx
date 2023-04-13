import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    pass: "",
  });

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(user)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="text"
          value={user.email}
          placeholder="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label>Password</label>
        <input
          type="password"
          value={user.pass}
          placeholder="password"
          onChange={(e) => setUser({ ...user, pass: e.target.value })}
        />
        <button name="submitButton" type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
