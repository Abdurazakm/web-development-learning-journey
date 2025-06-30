import React from "react";
import Entry from "./component/Entry";
import emojiDictionary from "./emojiDictionary";

function createEmoji(emojiDi) {
  return (
    <Entry
      key={emojiDi.id}
      emoji={emojiDi.emoji}
      name={emojiDi.name}
      meaning={emojiDi.meaning}
    />
  );
}

function App() {
  return (
    <div className="container">
      <h1><span className="heading">emojipedia</span></h1>
      <dl className="dictionary">
        {emojiDictionary.map(createEmoji)}
      </dl>
    </div>
  );
}

export default App;
