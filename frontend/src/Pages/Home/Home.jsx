import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'

const Home = () => {
    const [catergory,setCategory]=useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu catergory={catergory} setCategory={setCategory}/>
      <FoodDisplay category={catergory}/>
      <AppDownload/>
    </div>
  )
}

export default Home
