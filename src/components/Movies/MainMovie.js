import React, { useState } from 'react'
import Header from '../Header & Navbar/Header'
import Navbar from '../Header & Navbar/Navbar'
import Movies from './Movies'
import MenuFood from './MenuFood'

const MainMovie = () => {

  const [ foodData, setFoodData ] = useState(MenuFood)
  return (
    <>
    <Header />
    <Movies foodData={foodData} />
    <Navbar />
    </>
  )
}

export default MainMovie