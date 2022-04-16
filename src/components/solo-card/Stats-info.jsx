import React, { useEffect, useState } from 'react'

const Statsinfo = ({stats}) => {
    const [statsList,setStatsList]=useState([]);
    console.log(stats)
    useEffect(() => {
      getStatsInfo(stats.stat.url);
    }, [])
    const getStatsInfo=async(url)=>{
        try{
const response=await fetch(url);
const data= await response.json();
console.log(data);

setStatsList(data.affecting_moves.increase);
        }
    catch(err){
console.log(err);
    }    };
  return (
    <div className=" m-3 " >
        <div className='card'style={{height:"40vh"}}>
        <h3 className='text-center lead '>{stats.stat.name.toUpperCase()}</h3>
            <div className='card-body text-center overflow-auto scroller  '>
                <h6 className='font-monospace'>Base Power:{stats.base_stat}</h6>
                <h5 className='font-monospace'><u>Moves List</u></h5>
                {
        statsList.map(
             ele=> (
            <p>{ele.move.name}</p>          
            ))
      }
            </div>
        </div>
    </div>
  )
}

export default Statsinfo