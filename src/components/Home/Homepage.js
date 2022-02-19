import React from 'react'
import './Homepage.css'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
<>     
 <div className="mainBox">
        {/* <h1 id="headStyle">Welcome to iSoftwares</h1> */}
        <br></br>
        <p className="introText">There is nothing more deceptive than an obvious fact</p>
        <br></br>
        <br></br>
        <div className="mainImg">
            <div className="ImgBox">
                <img src="https://bishnudev.ml/icon.jpg" alt=""/>
            </div>
            <br></br>
            <br></br>
            <div className="mainPhText">
                <button id="exploreBtn"><Link style={{ textDecoration: 'none', color:'white' }} to="/tech-facts">Explore</Link></button>
                <br></br>
                <br></br>
                <button id="desktopBtn" onClick={()=> window.location.href='https://bishnudev.ml/'}>Desktop Site</button>
                <br></br>
                <br></br>
                <div className="sponsers">
                    <a href="https://www.facebook.com/bishnudev.khutia.90/"><img src="https://img.icons8.com/color/48/000000/facebook-new.png" /></a>
                    <a href="https://github.com/bishnudev1"><img src="https://img.icons8.com/ios-filled/48/000000/github.png" /></a>
                    <img src="https://img.icons8.com/color/48/000000/linkedin.png" />
                </div>
            </div>
            </div>
            </div>
            </>
  )
}

export default Homepage;