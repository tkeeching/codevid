import React from 'react'
import './Header.css'

class Header extends React.Component{
    render(){
        return(
            <div className="header-container">
                <p>Search your state or territory</p>
                <input type="text" placeholder="Search the state"/>
                <div><p>27 July, 10am</p></div>
            </div>
        )
    }
}

export default Header