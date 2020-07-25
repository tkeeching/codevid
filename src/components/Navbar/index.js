import React from 'react'
import './style.css'

class Navbar extends React.Component{
    render(){
        return(
            <div className="nav-container">
                <div className="logo">
                    <a href="#">CODEVID23</a>
                    <p>AUSTRALIA</p>
                </div>
                <div className="content-container">
                    <img src="homeIcon.png" alt="home icon"/>
                    <img src="aboutIcon.png" alt="about icon"/>
                </div>
            </div>
        )
    }
}

export default Navbar