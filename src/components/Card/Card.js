import React from 'react'
import './Card.css'

class Card extends React.Component{
    render(){
        return(
            <div className="card-container">
                <div className="confirmed">
                    <p>Confirmed</p>
                    <p>+4352</p>
                    <p>14,40,371</p>
                </div>
                <div className="active">
                    <p>Active</p>
                    <p>14,40,371</p>
                </div>
                <div className="recovered">
                    <p>Recovered</p>
                    <p>+4352</p>
                    <p>14,40,371</p>
                </div>
                <div className="deceased">
                    <p>Deceased</p>
                    <p>+4352</p>
                    <p>14,40,371</p>
                </div>
            </div>
        )
    }
}

export default Card