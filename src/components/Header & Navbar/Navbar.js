import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="nav">
                    <div className="nav-links">
                        {/* <a href="//github.io/jo_geek" target="_blank">Home</a>
                        <a href="http://stackoverflow.com/users/4084003/" target="_blank">Apps</a>
                        <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">Games</a>
                        <a href="https://codepen.io/jo_Geek/" target="_blank">About</a>
                        <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">Support Us</a> */}
                        <Link to='/home'>Home</Link>
                        <Link to='/tech-facts'>Tech Facts</Link>
                        <Link to='/food-facts'>Food Facts</Link>
                        <Link to='/animal-facts'>Animal Facts</Link>
                        <Link to='/about'>About</Link>
                    </div>
            </div>
        </>
    )
}

export default Navbar