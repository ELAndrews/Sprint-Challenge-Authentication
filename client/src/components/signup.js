import React, { useState } from "react";
import axios from "axios";

export default function SignUp(props) {
  const [registerDetails, setRegisterDetails] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setRegisterDetails({ ...registerDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3300/api/auth/register", registerDetails)
      .then(message => {
        alert(`Congratulations! You can now log In!`);
        console.log(message);
      })
      .catch(error => {
        alert(`:-( Sorry but something went wrong`);
        console.log(error.message);
      });
  };

  return (
    <div>
      <h2>Register Here</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={handleChange}
          name="username"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={handleChange}
          name="password"
        />
        <input type="submit" onSubmit={handleSubmit} />
      </form>
    </div>
  );
}
