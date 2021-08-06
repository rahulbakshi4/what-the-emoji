import React, { useState } from "react";
import "./styles.css";
import EmojiDictionary from "./EmojiDictionary";
export default function App() {
  var [meaning, setMeaning] = useState("");

  function inputChangeHandler(event) {
    let userEmoji = event.target.value;

    if (userEmoji in EmojiDictionary) {
      setMeaning(EmojiDictionary[userEmoji]);
    } else setMeaning("Sorry we dont have this emoji in our database yet :(");
  }

  return (
    <div className="App">
      <h1 className="head">WHAT THE EMOJI</h1>
      <input
        placeholder="Paste the emoji here to search"
        onChange={inputChangeHandler}
      ></input>
      <div className="meaning">{meaning}</div>
    </div>
  );
}
