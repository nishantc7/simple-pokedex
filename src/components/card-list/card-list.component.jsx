import React, { createContext, useState } from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component'
import PokeInfo from '../solo-card/Poke-info';
import {useNavigate } from 'react-router-dom';
export const CardList  = props => {
    const [user, setUser] = useState({"yo":"hehe"});
    const UserContext = createContext()
  const navigate=useNavigate();
    const handleAction=async(ele)=>{
        const response=await fetch(ele);
const data=await response.json();

console.log(data)
    }
    return (< div>
  
    <div className="card-list">
         
        {
        props.monsters.map(
            monster => (
                // <div class="box">
                <div className='poke-tile' >     
            <Card key={monster.id} monster={ monster }/>
            </div>
            //  <div class="details">
            //     <div class="content">
            //         <h1>Samantha</h1>
            //     </div></div></div> 
            ))
      }
      {/* <UserContext.Provider value={user}>
      <PokeInfo monsterinfo={ user }/>
    </UserContext.Provider> */}
      </div>  
            </div>);
};
