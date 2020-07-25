import React from 'react'
import './style.css'

class Header extends React.Component{
    render(){
        return(
            <div className="header-container">
                <p>Search your State</p>
                <div>
                    <input type="text" placeholder="Search..."/>
                </div>
            </div>
        )
    }
}

export default Header