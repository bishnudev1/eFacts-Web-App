import React, {useState} from 'react'
import Softwares from './Softwares'
import Header from '../Header & Navbar/Header'
import Navbar from '../Header & Navbar/Navbar'
import SoftMenu from './SoftApi'

const MainSoft = () => {

  const [ softMenuData, setSoftMenuData ] = useState(SoftMenu)
  return (
    <>
    <Header/>
    <Softwares softMenuData = {softMenuData} />
    <Navbar/>
    </>
  )
}

export default MainSoft