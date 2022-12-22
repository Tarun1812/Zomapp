import React from 'react'
import './filter.css'


const CuisineFilter = () => {
  return (
    <>
      <h3>CuisineFilter</h3>
      <div style={{marginLeft:"15%"}}>
        <label><input type="radio" name='cuisine' value="0" />All</label><br/>
        <label><input type="radio" name='cuisine' value="1" />North Indian</label><br/>
        <label><input type="radio" name='cuisine' value="2" />South Indian</label><br/>
        <label><input type="radio" name='cuisine' value="3" />Chinese</label><br/>
        <label><input type="radio" name='cuisine' value="4" />Fast Food</label><br/>
        <label><input type="radio" name='cuisine' value="5" />Street Food</label>
      </div>
    </>
  )
}

export default CuisineFilter