import React, { Component } from 'react'
import './Table.css'

class Table extends Component {
    constructor(props) {
       super(props) 

       this.state = { 
          countries: [
            { country: 'Australia', confirmed: 100, active: 100, recovered: 2000, deceased: 100 },
            { country: 'France', confirmed: 200, active: 50, recovered: 1000, deceased: 100 },
            { country: 'Malaysia', confirmed: 150, active: 30, recovered: 3000, deceased: 100 },
            { country: 'South Korea', confirmed: 250, active: 25, recovered: 5000, deceased: 100 },
            { country: 'Australia', confirmed: 100, active: 100, recovered: 2000, deceased: 100 },
            { country: 'France', confirmed: 200, active: 50, recovered: 1000, deceased: 100 },
            { country: 'Malaysia', confirmed: 150, active: 30, recovered: 3000, deceased: 100 },
            { country: 'South Korea', confirmed: 250, active: 25, recovered: 5000, deceased: 100 },
            { country: 'Australia', confirmed: 100, active: 100, recovered: 2000, deceased: 100 },
            { country: 'France', confirmed: 200, active: 50, recovered: 1000, deceased: 100 },
            { country: 'Malaysia', confirmed: 150, active: 30, recovered: 3000, deceased: 100 },
            { country: 'South Korea', confirmed: 250, active: 25, recovered: 5000, deceased: 100 },
            { country: 'Australia', confirmed: 100, active: 100, recovered: 2000, deceased: 100 },
            { country: 'France', confirmed: 200, active: 50, recovered: 1000, deceased: 100 },
            { country: 'Malaysia', confirmed: 150, active: 30, recovered: 3000, deceased: 100 },
            { country: 'South Korea', confirmed: 250, active: 25, recovered: 5000, deceased: 100 }
          ]
       }
    }
 
    renderTableData() {
        return this.state.countries.map((student, index) => {
           const { country, confirmed, active, recovered, deceased } = student //destructuring
           return (
              <tr key={country}>
                 <td>{country}</td>
                 <td>{confirmed}</td>
                 <td>{active}</td>
                 <td>{recovered}</td>
                 <td>{deceased}</td>
              </tr>
           )
        })
    }

    renderTableHeader() {
        let header = Object.keys(this.state.countries[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

  
    render() {
        return (
            <div>
                <table id='table-container'>
                    <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table