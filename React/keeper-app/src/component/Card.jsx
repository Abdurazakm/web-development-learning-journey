import React from 'react';

function Card(props) {
    return (
        <div className='cardstyle'>
            <h1>{props.name}</h1>
            <img src={props.img} alt={props.alt} className='circle' />
            <p>{props.tel}</p>
            <p>{props.email}</p>
        </div>
    );
}

export default Card;