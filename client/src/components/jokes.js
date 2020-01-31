import React, { useState } from "react";
import axios from "axios";
import JokeCard from "./jokeCard";

export default function Jokes(props) {
  const [jokes, setJokes] = useState([]);

  const handleClick = e => {
    axios
      .get("http://localhost:3300/api/jokes", {
        headers: {
          Authorization: props.token
        }
      })
      .then(jokes => {
        setJokes(jokes.data);
        console.log(jokes.data);
      })
      .catch(error => {
        alert(`:-( Sorry no jokes for you!`);
        console.log(error.message);
      });
  };

  return (
    <div className="signup-container">
      <h3>My Jokes</h3>
      {jokes.length === 0 ? (
        <button onClick={handleClick}>Where are the Jokes at?</button>
      ) : (
        jokes.map((curr, index) => {
          return (
            <div key={index}>
              <JokeCard curr={curr} index={index} />
            </div>
          );
        })
      )}
    </div>
  );
}
