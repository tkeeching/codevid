import React, { Component } from 'react'
import './Table.css'

class Table extends Component {
    constructor(props) {
       super(props) 

       this.state = { 
          states: [
            { state: 'ACT', confirmed: 12, active: 100, recovered: 2000, deceased: 100 },
            { state: 'NSW', confirmed: 200, active: 50, recovered: 1000, deceased: 100 },
            { state: 'NT', confirmed: 150, active: 30, recovered: 3000, deceased: 100 },
            { state: 'QLD', confirmed: 250, active: 25, recovered: 5000, deceased: 100 },
            { state: 'SA', confirmed: 100, active: 100, recovered: 2000, deceased: 100 },
            { state: 'TAS', confirmed: 200, active: 50, recovered: 1000, deceased: 100 },
            { state: 'VIC', confirmed: 150, active: 30, recovered: 3000, deceased: 100 },
            { state: 'WA', confirmed: 150, active: 30, recovered: 3000, deceased: 100 }
          ]
       }
    }
 
    renderTableData() {
        const { data } = this.props;
        console.log('table props: ');
        console.log(data);
        let states = [
            { state: 'ACT', confirmed: data[0].attributes.ACT, active: 100, recovered: 2000, deceased: data[0].attributes.ACT_Deaths },
            { state: 'NSW', confirmed: data[0].attributes.NSW, active: 50, recovered: 1000, deceased: data[0].attributes.NSW_Deaths },
            { state: 'NT', confirmed: data[0].attributes.NT, active: 30, recovered: 3000, deceased: data[0].attributes.NT_Deaths || 0 },
            { state: 'QLD', confirmed: data[0].attributes.QLD, active: 25, recovered: 5000, deceased: data[0].attributes.QLD_Deaths },
            { state: 'SA', confirmed: data[0].attributes.SA, active: 100, recovered: 2000, deceased: data[0].attributes.SA_Deaths },
            { state: 'TAS', confirmed: data[0].attributes.TAS, active: 50, recovered: 1000, deceased: data[0].attributes.TAS_Deaths },
            { state: 'VIC', confirmed: data[0].attributes.VIC, active: 30, recovered: 3000, deceased: data[0].attributes.VIC_Deaths },
            { state: 'WA', confirmed: data[0].attributes.WA, active: 30, recovered: 3000, deceased: data[0].attributes.WA_Deaths }
          ]

        return states.map((item, index) => {
           const { state, confirmed, active, recovered, deceased } = item //destructuring
           return (
              <tr key={index}>
                 <td>{state}</td>
                 <td>{confirmed}</td>
                 <td>{active}</td>
                 <td>{recovered}</td>
                 <td>{deceased}</td>
              </tr>
           )
        })
    }

    renderTableHeader() {
        let header = Object.keys(this.state.states[1])
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