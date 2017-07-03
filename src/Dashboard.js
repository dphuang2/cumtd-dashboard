import React, { Component } from 'react';
import StopTable from './StopTable';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <StopTable/>
      </div>
    );
  }
}

export default Dashboard;
