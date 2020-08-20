import React from "react";
import "./Card.css";

class Card extends React.Component {
  render() {
    const { data, dataWorld, isLoading } = this.props;
    const yesterdayConfirmed = data[1].attributes.Total_Cases;
    const todayConfirmed = data[0].attributes.Total_Cases;
    const confirmedDiff = todayConfirmed - yesterdayConfirmed;
    const yesterdayDeceased = data[1].attributes.Total_Deaths;
    const todayDeceased = data[0].attributes.Total_Deaths;
    const deceasedDiff = todayDeceased - yesterdayDeceased;
    const todayDeceasedPercentage = `${((todayDeceased / todayConfirmed) * 100).toFixed(2)}%`;
    let australiaCases = 0;
    let todayActive = 0;
    let todayRecovered = 0;
    let todayRecoveredDiff = 0;
    let todayRecoveredPercentage = 0;

    const findAustralia = () => {
      return dataWorld.filter((el) => el.country === "Australia");
    };

    if (!isLoading) {
      australiaCases = findAustralia()[0];
      todayActive = australiaCases.active_cases;
      todayRecovered = australiaCases.total_recovered;
      todayRecoveredDiff = australiaCases.new_recovered;
      todayRecoveredPercentage = `${((todayRecovered / todayConfirmed) * 100).toFixed(2)}%`;
    }

    return (
      <div className="card-container">
        <div className="confirmed">
          <p>Confirmed</p>
          <p>{`+${confirmedDiff}`}</p>
          <p>{todayConfirmed}</p>
        </div>
        <div className="active">
          <p>Active</p>
          <p>
            <br />
          </p>
          <p>{isLoading ? 0 : todayActive}</p>
        </div>
        <div className="recovered">
          <p>Recovered</p>
          <p>{isLoading ? `+0` : todayRecoveredDiff}</p>
          <p>
            {isLoading ? 0 : `${todayRecovered} (${todayRecoveredPercentage})`}
          </p>
        </div>
        <div className="deceased">
          <p>Deceased</p>
          <p>{`+${deceasedDiff}`}</p>
          <p>{`${todayDeceased} (${todayDeceasedPercentage})`}</p>
        </div>
      </div>
    );
  }
}

export default Card;
