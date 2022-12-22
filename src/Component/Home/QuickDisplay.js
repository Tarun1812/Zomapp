import React from 'react'
import './quickSearch.css'
import { Link } from 'react-router-dom'

const QuickDisplay = (props) => {

  const renderMealType = ({listData}) => {
    if(listData){
      return listData.map((item) => {
        return(
          <Link to={`/listing/${item.mealtype_id}`} key={item._id}>
            <div className='card'>
              <div className='cardImg'>
                <img src={item.meal_image} alt={item.mealtype} width='210' height='210' />
              </div>
              <div className='cardtxt'>
                <h2>{item.mealtype}</h2>
                <p>{item.content}</p>
              </div>
            </div>
          </Link>
        )
      })
    }
  }
  
  return (
    <div className='quicksearch'>
      <h1>Quick Search</h1>
      {renderMealType(props)}
    </div>
  )
}

export default QuickDisplay