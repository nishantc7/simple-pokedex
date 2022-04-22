import React from 'react'
import { useLocation } from 'react-router-dom';
import Statsinfo from './Stats-info';
import './solo-card.css';
const Pokeinfo = () => {
  const { state } = useLocation();
  console.log(state);
  const [speciesData, setSpeciesData] = React.useState({ evolves_from_species: "None", habitat: { name: "None" }, flavor_text_entries: [{ flavor_text: "No Info" }] });
  const [speciesName, setSpeciesName] = React.useState("None");
  React.useEffect(() => {
    getSpeciesInfo(state.species.url);
  }, [])
  React.useEffect(() => {
    console.log(speciesData.flavor_text_entries[0].flavor_text);
    if (speciesData.evolves_from_species) {
      setSpeciesName(speciesData.evolves_from_species.name);
    }
    else {
      setSpeciesName("None");
    }
  }, [speciesData])
  const getSpeciesInfo = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setSpeciesData(data);
    }
    catch (err) {
      console.log(err);
    }
  }
  return (
    <div className='container-fluid styles'><h1 className='pt-3 text-center'>Poke-Info</h1><hr />
      <div className='row'>
        <div className='col-sm-4 m-3 mx-4'>
          <img src={state.image} width={300} height={300} />
        </div>
        <div className='info-box col-sm-6 bg-dark font-monospace p-5'>
          <p>Name:<span>{(state.species.name).toUpperCase()}</span></p>
          <p>Evolves From:<span>{speciesName}</span></p>
          <p>Habitat:<span>{speciesData.habitat.name}</span></p>
          <p>Capture Rate:<span>{speciesData.capture_rate}</span></p>
          <p>About:<span>{speciesData.flavor_text_entries[0].flavor_text}</span></p>
        </div>
      </div>
      <div className='row'>

        {
          state.stat.map(
            ele => (
              <div className='col-sm' >
                <Statsinfo stats={ele} />
              </div>

            ))
        }
      </div>
    </div>
  )
}

export default Pokeinfo