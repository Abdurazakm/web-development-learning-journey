import React from 'react';

function Avater(props) {
    return (
       
            <img className="circle-img" src={props.img} alt={props.alt} />
        
    );
}

export default Avater;