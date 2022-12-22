import React, { Fragment } from 'react'
import QuickSearch from './QuickSearch'
import Search from './Search'

const Home = () => {
  return (
    <Fragment>
        <Search />
        <QuickSearch />
    </Fragment>
  )
}

export default Home