import React, { Component } from 'react';
import BusRow from './BusRow';
import './BusTable.css';

class BusTable extends Component {
  render() {
    var rows = [];
    if(Object.keys(this.props.data).length !== 0 && 
       "departures" in this.props.data){
         this.props.data.departures.forEach(function(departure){
           rows.push(<BusRow key={departure.trip.trip_id} departure={departure} />);
         });
    }

    // If there are no expected departures, push a 'None' indicator
    if(rows.length === 0)
      rows.push(<BusRow key={0} departure={{'expected_mins': 'None', 'headsign': 'None'}} />);

    return (
      <div className="BusTable center">
        <table>
          <thead>
            <tr>
              <th>Bus</th>
              <th>Arriving</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default BusTable;
