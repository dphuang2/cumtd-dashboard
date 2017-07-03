import React, { Component } from 'react';
import BusRow from './BusRow';
import './BusTable.css';

class BusTable extends Component {
  render() {
    var rows = [];
    if(Object.keys(this.props.data).length !== 0 && 
       "departures" in this.props.data){
      this.props.data.departures.forEach(function(departure){
        rows.push(<BusRow key={departure.vehicle_id} departure={departure} />);
      });
    }
    return (
      <div className="BusTable">
        <table>
          <thead>
            <tr>
              <th>Bus</th>
              <th>ETA</th>
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
