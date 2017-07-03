import React, { Component } from 'react';
import BusTable from './BusTable';
import SearchBar from './SearchBar';
import './StopTable.css';

var key = "abbadf0572d24a02949d9e4ff688e944";

let DATA = {"time":"2017-05-16T21:39:16-05:00","new_changeset":true,"status":{"code":200,"msg":"ok"},"rqst":{"method":"GetDeparturesByStop","params":{"stop_id":"IT"}},"departures":[{"stop_id":"IT:2","headsign":"70W Grey","route":{"route_color":"808285","route_id":"GREY EVENING","route_long_name":"Grey Evening","route_short_name":"70","route_text_color":"000000"},"trip":{"trip_id":"7R720__GR4_MF","trip_headsign":"West - PARkland College","route_id":"GREY EVENING","block_id":"GR4 MF","direction":"West","service_id":"GR4 MF","shape_id":"70W"},"vehicle_id":"0339","origin":{"stop_id":"UWALMART:2"},"destination":{"stop_id":"PKLN:1"},"is_monitored":true,"is_scheduled":true,"is_istop":false,"scheduled":"2017-05-16T21:40:00-05:00","expected":"2017-05-16T21:41:03-05:00","expected_mins":2,"location":{"lat":40.116977,"lon":-88.237083}},{"stop_id":"IT:1","headsign":"50E Green","route":{"route_color":"008063","route_id":"GREEN EVENING[V:0000]","route_long_name":"Green Evening","route_short_name":"50","route_text_color":"ffffff"},"trip":{"trip_id":"[@7.0.41201218@][3][1243953754500]\/6__GNX5_MF_V1","trip_headsign":"East - Orchard Downs","route_id":"GREEN EVENING[V:0000]","block_id":"GNX5 MF V1","direction":"East","service_id":"GNX5 MF V1","shape_id":"GREEN EVENING 52"},"vehicle_id":"1177","origin":{"stop_id":"PKLN:1"},"destination":{"stop_id":"ODSS:1"},"is_monitored":true,"is_scheduled":true,"is_istop":false,"scheduled":"2017-05-16T21:51:00-05:00","expected":"2017-05-16T21:51:00-05:00","expected_mins":12,"location":{"lat":40.116597,"lon":-88.28175}},{"stop_id":"IT:5","headsign":"100S Yellow","route":{"route_color":"fcee1f","route_id":"YELLOW EVENING","route_long_name":"Yellow Evening","route_short_name":"100","route_text_color":"000000"},"trip":{"trip_id":"[@15.0.63189138@][2][1338407799588]\/15__Y3_MF","trip_headsign":"South - Savoy","route_id":"YELLOW EVENING","block_id":"Y3 MF","direction":"South","service_id":"Y3 MF","shape_id":"100S"},"vehicle_id":"1353","origin":{"stop_id":"WALMART:2"},"destination":{"stop_id":"SWALMART:1"},"is_monitored":true,"is_scheduled":true,"is_istop":false,"scheduled":"2017-05-16T21:50:00-05:00","expected":"2017-05-16T21:51:05-05:00","expected_mins":12,"location":{"lat":40.137877,"lon":-88.2435}},{"stop_id":"IT:2","headsign":"50W GREENhopper Cf\/PARkland","route":{"route_color":"008063","route_id":"GREENHOPPER EVENING[V:0000]","route_long_name":"GREENhopper Evening","route_short_name":"50","route_text_color":"ffffff"},"trip":{"trip_id":"[@14.0.50384734@][1270492238828]\/36__GN3_SCHMF_V1","trip_headsign":"West - Country Fair \/ PARkland","route_id":"GREENHOPPER EVENING[V:0000]","block_id":"GN3 SCHMF V1","direction":"West","service_id":"GN3 SCHMF V1","shape_id":"HOPPER EV 62"},"vehicle_id":"1163","origin":{"stop_id":"SUNNYCREST:2"},"destination":{"stop_id":"PKLN:1"},"is_monitored":true,"is_scheduled":true,"is_istop":false,"scheduled":"2017-05-16T21:52:00-05:00","expected":"2017-05-16T21:52:00-05:00","expected_mins":13,"location":{"lat":40.11153,"lon":-88.209}},{"stop_id":"IT:5","headsign":"100N Yellow","route":{"route_color":"fcee1f","route_id":"YELLOW EVENING","route_long_name":"Yellow Evening","route_short_name":"100","route_text_color":"000000"},"trip":{"trip_id":"[@15.0.63189138@][1][1338405367103]\/5__Y1_MF","trip_headsign":"North -  Champaign Walmart","route_id":"YELLOW EVENING","block_id":"Y1 MF","direction":"North","service_id":"Y1 MF","shape_id":"100N"},"vehicle_id":"1182","origin":{"stop_id":"SWALMART:1"},"destination":{"stop_id":"WALMART:2"},"is_monitored":true,"is_scheduled":true,"is_istop":false,"scheduled":"2017-05-16T21:50:00-05:00","expected":"2017-05-16T21:58:08-05:00","expected_mins":19,"location":{"lat":40.102663,"lon":-88.241583}},{"stop_id":"IT:1","headsign":"50E GREENhopper","route":{"route_color":"008063","route_id":"GREENHOPPER EVENING[V:0000]","route_long_name":"GREENhopper Evening","route_short_name":"50","route_text_color":"ffffff"},"trip":{"trip_id":"[@14.0.50384734@][1270492238828]\/2__R3_MF_V1","trip_headsign":"East - Sunnycrest","route_id":"GREENHOPPER EVENING[V:0000]","block_id":"R3 MF V1","direction":"East","service_id":"R3 MF V1","shape_id":"HOPPER EV 107"},"vehicle_id":"0322","origin":{"stop_id":"PKLN:1"},"destination":{"stop_id":"SUNNYCREST:2"},"is_monitored":true,"is_scheduled":true,"is_istop":false,"scheduled":"2017-05-16T22:06:00-05:00","expected":"2017-05-16T22:06:00-05:00","expected_mins":27,"location":{"lat":40.13091,"lon":-88.287083}},{"stop_id":"IT:2","headsign":"50W Green","route":{"route_color":"008063","route_id":"GREEN EVENING[V:0000]","route_long_name":"Green Evening","route_short_name":"50","route_text_color":"ffffff"},"trip":{"trip_id":"[@7.0.41201218@][4][1243955118234]\/25__GNX4_MF_V1","trip_headsign":"West -Country Fair \/ PARkland","route_id":"GREEN EVENING[V:0000]","block_id":"GNX4 MF V1","direction":"West","service_id":"GNX4 MF V1","shape_id":"50W GREEN 55"},"vehicle_id":"0319","origin":{"stop_id":"ODSS:1"},"destination":{"stop_id":"PKLN:1"},"is_monitored":true,"is_scheduled":true,"is_istop":false,"scheduled":"2017-05-16T22:07:00-05:00","expected":"2017-05-16T22:07:00-05:00","expected_mins":28,"location":{"lat":40.094683,"lon":-88.1935}}]};

class StopTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
    this.getDepartureByStop = this.getDepartureByStop.bind(this);
  }

  getDepartureByStop(searchText){
    console.log('getDepartureByStop fired');
    let _self = this;
    fetch("https://developer.cumtd.com/api/v2.2/json/GetDeparturesByStop?key="+key+"&stop_id="+searchText)
    .then(function(response){
      if (response.status !== 200) {  
        return;  
      }
      response.json().then(function(data) {
        _self.setState({data: data});
        console.log(data);
      }); 
    })
  }

  render() {
    return (
      <div className="StopTable">
        <SearchBar 
          onSearchTextInput={this.getDepartureByStop}
        />
        <BusTable data={this.state.data}/>
      </div>
    );
  }
}

export default StopTable;
