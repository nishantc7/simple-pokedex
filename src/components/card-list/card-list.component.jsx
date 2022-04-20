import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component'
export const CardList = props => {
    return (< div>

        <div className="card-list">
            {
                props.monsters.map(
                    monster => (
                        <div className='poke-tile' >
                            <Card key={monster.id} monster={monster} />
                        </div>
                    ))
            }
        </div>
    </div>);
};
