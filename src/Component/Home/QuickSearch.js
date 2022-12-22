import React, { useEffect, useState } from 'react'
import QuickDisplay from './QuickDisplay'

const QuickSearch = () => {
const [data,setData] = useState()

const renderQuickSearch = () => {
  fetch(`http://3.17.216.66:4000/quicksearch` , {method:'GET'})
  .then((res) => res.json())
  .then((data) => setData(data))
}
useEffect(() => {
  renderQuickSearch()
},[])

  return (
    <div>
      {/* sending Data using props from parent to child */}
      <QuickDisplay listData={data} />
    </div>
  )
}

export default QuickSearch