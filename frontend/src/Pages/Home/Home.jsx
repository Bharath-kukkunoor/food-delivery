import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'

const Home = () => {
    const [catergory,setCategory]=useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu catergory={catergory} setCategory={setCategory}/>
    </div>
  )
}

export default Home
