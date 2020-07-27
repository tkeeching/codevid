import React from 'react'
import './HomeLeft.css'
import Header from '../Header/Header'
import Card from '../Card/Card'

class HomeLeft extends React.Component{
    render(){
        return(
            <div className="homeleft-container">
                <Header />
                <Card />
            </div>
        )
    }
}

export default HomeLeft