import React from 'react';
import './card.styles.css';


export const Card = (props) => (
    <div className="card-container">
        <img alt="monster" src={`https://img.pokemondb.net/artwork/${props.monster.name}.jpg`
            } />
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
)