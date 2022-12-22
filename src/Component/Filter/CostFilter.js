import React from 'react'

const CostFilter = () => {
  return (
    <>
      <h3>Cost Filter</h3>
      <div style={{marginLeft:"15%"}}>
        <label><input type="radio" name='cuisine' value="0" />All</label><br/>
        <label><input type="radio" name='cuisine' value="100-300" />100-300</label><br/>
        <label><input type="radio" name='cuisine' value="301-600" />301-600</label><br/>
        <label><input type="radio" name='cuisine' value="601-1000" />601-1000</label><br/>
        <label><input type="radio" name='cuisine' value="1001-5000" />1001-5000</label>
      </div>
    </>
  )
}

export default CostFilter