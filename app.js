// eaa4a6a512eeccb553a8182644a8d19c

// http://api.weatherstack.com/current?access_key=eaa4a6a512eeccb553a8182644a8d19c&query=Jersey%20City

// http://api.weatherstack.com/current?access_key=eaa4a6a512eeccb553a8182644a8d19c&query=37.8267,-122.4233

const request = require("postman-request");

const url =
  "http://api.weatherstack.com/current?access_key=eaa4a6a512eeccb553a8182644a8d19c&query=37.8267,-122.4233";

// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

request(url, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
