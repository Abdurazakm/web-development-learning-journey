import React from "react";
import notes from "./notes";
function Note(props) {
  return (
      <div className="Note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </div>
  );
}

export default Note;
