import React, { useEffect, useState } from 'react'
import './search.css'

const Search = () => {
  const [city,setCity] = useState()
  const [restCity, setRestCity] = useState()

  const cityData = () => {
    fetch(`http://3.17.216.66:4000/location`, {method:'GET'})
    .then((res) => res.json())
    // .then((data) => console.log(data))
    .then((data) => setCity(data))
  }
  const handleCity = (event) => {
    let stateId = event.target.value;
    fetch(`http://3.17.216.66:4000/restaurant?stateId=${stateId}`,{method:'GET'})
    .then((res) => res.json())
    .then((data) => setRestCity(data))
}
  useEffect(()=> {
    cityData();
    // handleCity()
  },[])
  return (
    <div className='mainsearch'>
      <div id="logo">
         <h3 style={{fontSize:"65px"}}>D!</h3>
      </div>
      <div className='searchbox'>
        <span className='city'>
          <select onChange={handleCity}>
            <option>-----SELECT CITY-----</option>
            {/* (city || []) this checks weather the array of objects is defined or not */}
            {(city || []).map((item) => {
              // console.log(item)
              return(
                <option value={item.state_id} key={item.state_id}>{item.state}</option>
              )
            })}
          </select>
        </span>
        <span className='cityrest'>
          <select>
            <option>----SELECT RESTAURANT----</option>
            {(restCity || []).map((item) => {
                return(
                    <option value={item.restaurant_id} key={item._id}>
                      {item.restaurant_name} | {item.address}
                    </option>
                )
            })}
          </select>
        </span>
      </div>
    </div>
  )
}

export default Search