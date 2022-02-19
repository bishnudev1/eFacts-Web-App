import React from 'react'
import './Softwares.css'
import { Link } from 'react-router-dom'

const Softwares = ({ softMenuData }) => {
    return (
        <>
            <div className="mainContainer">
                {softMenuData.map((curElem) => {
                    const { id, MainImage, LogoImage, name, category, description } = curElem
                    return (
                        <>
                            <div className="first hero" key={id}>
                                <img className="hero-profile-img"
                                    src={MainImage}
                                    alt="" />
                                <div className="hero-description-bk">
                                    <p id='nameTextID'>{name}</p>
                                </div>
                                <div className="hero-date">
                                    <p id='desText'>{description}</p>
                                </div>
                                <div className="hero-btn">
                                    {/* <a href="/coming-soon">Know More</a> */}
                                    <Link to='/coming-soon'>Know More</Link>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Softwares