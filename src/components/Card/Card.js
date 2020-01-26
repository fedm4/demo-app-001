import React from 'react';

import './Card.scss';

const Card = props => {
    return (
      <section className={`card ${props.width} ${props.className}`}>
        <header className="card-header">
            <h1>{props.title}</h1>
        </header>
        <div className="card-content">
            {props.children}
        </div>
      </section>  
    );
};

export default Card;