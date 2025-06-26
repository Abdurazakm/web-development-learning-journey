import React from "react";
import Entry from "./component/Entry";
import emojiDictionary from "./emojiDictionary";

const App = () => {
  return (
    <div className="container">
      <h1>
        <span className="heading">emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojiDictionary.map((emojiDi) => (
          <Entry
            key={emojiDi.id}
            emoji={emojiDi.emoji}
            name={emojiDi.name}
            meaning={emojiDi.meaning}
          />
        ))}
      </dl>
    </div>
  );
};

export default App;
