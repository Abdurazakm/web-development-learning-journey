import React from "react";
import Card from "./component/Card";
import contacts from "./contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My contact</h1>
      <Card
      name = {contacts[0].name}
      img = {contacts[0].imgsrc}
      alt = {contacts[0].alt}
      tel = {contacts[0].phone}
      email ={contacts[0].emailaddress}
      />
      <Card
       name = {contacts[1].name}
      img = {contacts[1].imgsrc}
      alt = {contacts[1].alt}
      tel = {contacts[1].phone}
      email ={contacts[1].emailaddress}
      />
    </div>
  );
}

export default App;
