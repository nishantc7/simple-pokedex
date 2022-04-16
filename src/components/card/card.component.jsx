import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './card.styles.css';


export const Card = (props) => {
  const [stats, setStats] = useState([{ base_stat: "NaN" }, { base_stat: "NaN" }, { base_stat: "NaN" }])
  const navigate = useNavigate();
  useEffect(() => {
    // console.log(stats);
  }, [stats])

  const handleAction = async (ele) => {
    const response = await fetch(ele);
    const data = await response.json();
    console.log(data)
    setStats(data.stats);


    navigate('/poke/info', {
      state:
      {
        stat: data.stats,
        image: data.sprites.other.dream_world.front_default, species: data.species
      }
    });

  }
  return (
    <div className="card-container">
      <div class="card">
        <div className='box'>
          <div className='card-tile h-100'>
            <div className='card-body p-5 tile' style={{ backgroundImage: `url(https://img.pokemondb.net/artwork/${props.monster.name}.jpg)` }}>
            </div>
            <div class="details" onClick={() => handleAction(props.monster.url)}>
              <div class="content">
                <h1>Stats</h1>
                {/* <p>Hp:{stats[0].base_stat}</p>
                    <p>Attack:{stats[1].base_stat}</p>
                    <p>Defence:{stats[2].base_stat}</p> */}
              </div></div>
          </div>
        </div>
        
        <div class="card-block">
          <h4 class="card-title">{props.monster.name}</h4>
          <p class="card-text">{props.monster.email}</p>
        </div>
        
      </div></div>);
}