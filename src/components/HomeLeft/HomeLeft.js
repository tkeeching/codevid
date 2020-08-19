import React from 'react'
import './HomeLeft.css'
import Header from '../Header/Header'
import Card from '../Card/Card'
import Table from '../Table/Table'

class HomeLeft extends React.Component{ 
    render(){
        const { data } = this.props;

        return(
            <div className="homeleft-container">
                <Header />
                <Card {...this.props} />
                <Table data={data} />
            </div>
        )
    }
}

export default HomeLeft