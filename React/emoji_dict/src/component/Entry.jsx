import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji">{props.emoji}</span>
        <span className="name">{props.name}</span>
      </dt>
      <dd className="description">{props.meaning}</dd>
    </div>
  );
}

export default Entry;
