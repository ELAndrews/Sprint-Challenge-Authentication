import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Jokes(props) {
  const [jokes, setJokes] = useState({});

  const handleClick = e => {
    axios
      .get("http://localhost:3300/api/auth/jokes", {
        headers: {
          Authorization: props.token
        }
      })
      .then(jokes => {
        console.log(jokes);
        setJokes(jokes);
      })
      .catch(error => {
        alert(`:-( Sorry no jokes for you!`);
        console.log(error.message);
      });
  };

  return (
    <div className="signup-container">
      <button onClick={handleClick}>Where are the Jokes at?</button>
    </div>
  );
}
