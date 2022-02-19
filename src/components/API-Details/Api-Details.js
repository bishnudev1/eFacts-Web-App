import React from 'react'
import { Link } from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Api_Details = () => {

    const myStyle = {
        'position': 'absolute',
        'top': '50%',
        'left': '50%',
        'transform': 'translate(-50%,-50%)'
    }
    

  return (
    <>
    <div style={myStyle}>
    <h1 style={{'padding': '23px'}}>Coming Soon</h1>
    <Link to='/tech-facts'>Go Back</Link>
    </div>
    </>
  )
}

export default Api_Details