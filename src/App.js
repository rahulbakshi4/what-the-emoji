import React, { useState } from "react";
import "./styles.css";
import EmojiDictionary from "./EmojiDictionary";

//commonly used emojis
const emojiBase = {
  "😁": "Beaming Face with Smiling Eyes ",
  "❤️": "Red Heart ",
  "😢": " Crying Face",
  "😎": " Smiling Face with Sunglasses",
  "😂": "Face with Tears of Joy"
};

const commonlyUsedEmojis = Object.keys(emojiBase);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function inputChangeHandler(event) {
    let userEmoji = event.target.value;

    if (userEmoji in EmojiDictionary) {
      setMeaning(EmojiDictionary[userEmoji]);
    } else setMeaning("Sorry we dont have this emoji in our database yet :(");
  }

  function emojiClickHandler(emoji) {
    setMeaning(EmojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1 className="head">WHAT THE EMOJI</h1>
      <input
        placeholder="Paste the emoji here to search"
        onChange={inputChangeHandler}
      ></input>
      <div className="meaning">{meaning}</div>

      <div className="common">Some commonly used emojis</div>

      {commonlyUsedEmojis.map((emoji) => {
        return (
          <div
            onClick={() => emojiClickHandler(emoji)}
            className="common-emoji"
            key={emoji}
          >
            {emoji}
          </div>
        );
      })}
    </div>
  );
}
