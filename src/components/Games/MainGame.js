import React, {useState} from 'react'
import Games from './Games'
import Navbar from '../Header & Navbar/Navbar'
import Header from '../Header & Navbar/Header'
import MenuAnimal from './MenuAnimal'

const MainGame = () => {

  const [ animalData, setAnimalData ] = useState(MenuAnimal)
  return (
    <>
    <Header />
    <Games animalData={animalData}/>
    <Navbar />
    </>
  )
}

export default MainGame