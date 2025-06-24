import React from "react";
import Card from "./component/Card";
import contacts from "./contacts";
import Avater from "./component/Avater";
import web from "./assets/web.png";

function creatcard(contact){
  return (<Card
  id = {contact.id}
  key ={ contact.id}
  name = { contact.name}
  img = { contact.imgsrc}
  alt = {contact.alt}
  tel  = {contact.phone}
  email = {contact.emailaddress}


  />)
}

function App() {
  return (
    <div>
      <h1 className="heading">My contact</h1>
      <Avater img={web} />
      {contacts.map(creatcard)}
    </div>
  );
}

export default App;
