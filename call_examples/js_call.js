var request = require('request');
var key = "abbadf0572d24a02949d9e4ff688e944";

request('https://www.cumtd.com/autocomplete/stops/v1.0/json/search?query=il', function (error, response, body) {
  console.log("SEARCH")
  console.log('error:', error); // Print the error if one occurred 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  console.log('body:', body); // Print the HTML for the Google homepage. 
});

request("https://developer.cumtd.com/api/v2.2/json/GetDeparturesByStop?key="+key+"&stop_id=iu", function (error, response, body) {
  console.log("GET DEPARTURE BY STOP")
  console.log('error:', error); // Print the error if one occurred 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  console.log('body:', body); // Print the HTML for the Google homepage. 
  console.log(typeof(body));
  console.log(JSON.parse(body));
});
