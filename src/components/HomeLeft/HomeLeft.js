import React from 'react'
import './HomeLeft.css'
import Header from '../Header/Header'
import Card from '../Card/Card'
import Table from '../Table/Table'

class HomeLeft extends React.Component{
    render(){
        return(
            <div className="homeleft-container">
                <Header />
                <Card />
                <Table />
            </div>
        )
    }
}

export default HomeLeft