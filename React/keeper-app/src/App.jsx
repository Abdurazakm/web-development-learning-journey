import React from "react";
import Header from "./component/Header";
import Note from "./component/Note";
import Footer from "./component/Footer";
import notes from "./component/notes";


function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <div className="notepos">
          {notes.map((note) => (
            <Note key={note.id} title={note.title} content={note.content} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
