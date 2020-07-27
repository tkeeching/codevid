import React from 'react'
import './HomeLeft.css'

class HomeLeft extends React.Component{
    render(){
        return(
            <div className="homeleft-container">
                <div>
                    <p>Search your state or territory</p>
                    <input type="text" placeholder="Search the state"/>
                </div>
            </div>
        )
    }
}

export default HomeLeft