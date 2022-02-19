import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <>
        <div className="head-box">
        <div className="head-text"><h3>Excel Facts</h3></div>
        <div className="logoBox">
        <Link to='/coming-soon'><img src="https://img.icons8.com/fluency/48/000000/guest-male.png"/></Link>
        {/* <Link to='/register'><img src="https://img.icons8.com/fluency/48/000000/guest-male.png"/></Link> */}
        {/* <p>Register</p> */}
        </div>
    </div>
        </>
    )
}

export default Header