import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Component/Header/Header'
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import Listing from './Component/Listing/Listing';
import Restdetails from './Component/Details/Restdetails';

const Routing = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Route exact path="/" component={Home} />
        <Route path="/listing/:id" component={Listing} />
        <Route path="/details/:id" component={Restdetails} />
        <Footer />
    </BrowserRouter>
  )
}

export default Routing