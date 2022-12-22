import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './listing.css'
import CuisineFilter from '../Filter/CuisineFilter'
import CostFilter from '../Filter/CostFilter'

const Listing = (props) => {
    // console.log(props.match.params.id)
    const Id=props.match.params.id
    const [mealListing, setMealListing] = useState()
    // const renderMealType =() => {
    //     fetch(`http://3.17.216.66:4000/restaurant?mealtype_id=${Id}`)
    //     .then((res) => res.json())
    //     // .then((data) => console.log(data))
    //     .then((data) => setMealListing(data))
    // }
    useEffect(() => {
        fetch(`http://3.17.216.66:4000/restaurant?mealtype_id=${Id}`)
        .then((res) => res.json())
        // .then((data) => console.log(data))
        .then((data) => setMealListing(data))
    },[])
  return (
    <>
    <div className='filterbox'>
        <h3>Filters</h3>
        <hr/>
        <CuisineFilter />
        <br/>
        <CostFilter/>
    </div>
        <div className='listingbox'>
        {(mealListing || []).map((item) =>{
                return(
                    <div className='listingsubbox' key={item._id}>
                        <img src={item.restaurant_thumb} alt={item.restaurant_name} />
                        <div className='listingtxt'>
                            <Link to={`/details/${item.restaurant_id}`} ><h3>{item.restaurant_name}</h3></Link>
                            <p>{item.address}</p>
                            <p><b>Rs:</b>{item.cost}</p>
                        </div>
                    </div>
                )
            })}
    </div>
    </>
  )
}

export default Listing