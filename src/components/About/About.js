import React from 'react'
import './About.css'
import DP from '../../components/Images/dp.jpg'

const About = () => {
  return (
    <>
      <div className="AboutSection">
        <div className="AboutText">
        <p><b>App Type</b> : Facts App</p>
          <p><b>App ID</b> : 10700120026</p>
          <p><b>App Version</b> : 1.0.0</p>
          <p><b>App Author</b> : Excel Pvt. Ltd.</p>
        </div>
      </div>
      <h1 className="h1-text">
        <i className="fa fa-users" aria-hidden="true"></i>Administrator
      </h1>
      <div className="container">
        <div className="box">
          <div className="top-bar"></div>
          <div className="top">
          <i className="fa fa-check-circle" aria-hidden="true"></i>
            <input type="checkbox" className="heart-btn" id="heart-btn-1"/>
              <label className="heart" for="heart-btn-1"></label>
          </div>
          <div className="content">
            <img src={DP}/>
              <strong>Bishnudev Khutia</strong>
              <p>Indie Developer</p>
          </div>
          <div className="btn">
            <a href="https://github.com/bishnudev1"><i className="fa fa-eye" aria-hidden="true"></i>View</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default About