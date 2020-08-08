import React from 'react'
import './Card.css'

class Card extends React.Component{
    render(){
        const { data } = this.props;
        const yesterdayConfirmed = data[1].attributes.Total_Cases;
        const todayConfirmed = data[0].attributes.Total_Cases;
        const confirmedDiff = todayConfirmed - yesterdayConfirmed;
        const yesterdayDeceased = data[1].attributes.Total_Deaths;
        const todayDeceased = data[0].attributes.Total_Deaths;
        const deceasedDiff = todayDeceased - yesterdayDeceased;

        return(
            <div className="card-container">
                <div className="confirmed">
                    <p>Confirmed</p>
                    <p>{`+${confirmedDiff}`}</p>
                    <p>{todayConfirmed}</p>
                </div>
                <div className="active">
                    <p>Active</p>
                    <p>+4352</p>
                    <p>14,40,371</p>
                </div>
                <div className="recovered">
                    <p>Recovered</p>
                    <p>+4352</p>
                    <p>14,40,371</p>
                </div>
                <div className="deceased">
                    <p>Deceased</p>
                    <p>{`+${deceasedDiff}`}</p>
                    <p>{todayDeceased}</p>
                </div>
            </div>
        )
    }
}

export default Card