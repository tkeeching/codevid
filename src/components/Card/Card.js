import React from 'react'
import './Card.css'

class Card extends React.Component{
    render(){
        const { data, dataWorld, isLoading } = this.props;
        const yesterdayConfirmed = data[1].attributes.Total_Cases;
        const todayConfirmed = data[0].attributes.Total_Cases;
        const confirmedDiff = todayConfirmed - yesterdayConfirmed;
        const yesterdayDeceased = data[1].attributes.Total_Deaths;
        const todayDeceased = data[0].attributes.Total_Deaths;
        const deceasedDiff = todayDeceased - yesterdayDeceased;

        const findAustralia = () => {
            return (
                dataWorld.filter(el => el.country === 'Australia')
            )
        }

        let australiaCases = 0;

        if (!isLoading) {
            australiaCases = findAustralia()[0];
            console.log(australiaCases);
        }
        
        return(
            <div className="card-container">
                <div className="confirmed">
                    <p>Confirmed</p>
                    <p>{`+${confirmedDiff}`}</p>
                    <p>{todayConfirmed}</p>
                </div>
                <div className="active">
                    <p>Active</p>
                    <p><br /></p>
                    <p>{isLoading ? 0 : australiaCases.active_cases}</p>
                </div>
                <div className="recovered">
                    <p>Recovered</p>
                    <p>{isLoading ? 0 : australiaCases.new_recovered}</p>
                    <p>{isLoading ? 0 : australiaCases.total_recovered}</p>
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