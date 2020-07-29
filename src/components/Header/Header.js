import React from 'react'
import './Header.css'
import '../LiveTime/LiveTime'
import LiveTime from '../LiveTime/LiveTime'

class Header extends React.Component{
    render(){
        return(
            <div className="header-container">
                <p>Search your state or territory</p>
                <input type="text" placeholder="Search the state"/>
                <LiveTime />
            </div>
        )
    }
}

export default Header