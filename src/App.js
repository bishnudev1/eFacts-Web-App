import React, { useState, useEffect } from 'react'
import LoadingSpin from "react-loading-spin";
import Home from './components/Home/Home'
import MainSoft from './components/Softwares/MainSoft'
import MainGame from './components/Games/MainGame'
import MainAbout from './components/About/MainAbout'
import MainMovie from './components/Movies/MainMovie'
import Control from './components/Admin/Control'
import Login from './components/Admin/Login'
import Register from './components/Admin/Register'
import Api_Details from './components/API-Details/Api-Details'
import { Routes, Route } from 'react-router-dom';

const App = () => {

  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 3000);
  }, [])

  return (

    <>

      {
        loader ?
          <div className={"ExampleOfUsage"}>
            <LoadingSpin
                        timingFunction="ease-in-out"
                        direction="alternate"
                        size="50px"
                        primaryColor="skyblue"
                        secondaryColor="lightpink"
                        numberOfRotationsInAnimation={2}
             />
          </div>

          :
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/tech-facts' element={<MainSoft />} />
            <Route path='/animal-facts' element={<MainGame />} />
            <Route path='/about' element={<MainAbout />} />
            <Route path='/food-facts' element={<MainMovie />} />
            {/* <Route path='/dashboard' element={<Control/>} /> */}
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/coming-soon' element={<Api_Details />} />
          </Routes>


      }
    </>
  )
}

export default App
