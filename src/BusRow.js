import React, { Component } from 'react';

class BusRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.departure.headsign}</td>
        <td>{this.props.departure.expected_mins}</td>
      </tr>
    );
  }
}

export default BusRow;
