import React from "react";
import Avater from "./Avater";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avater img={props.img} />
      </div>
      <div className="bottom">
        <Detail detail_info={props.tel} />
        <Detail detail_info={props.email} />
      </div>
    </div>
  );
}

export default Card;
