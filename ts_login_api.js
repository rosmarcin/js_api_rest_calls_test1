//console.log('TEST1')
// let request = new XMLHttpRequest();
// request.open("GET", "http://rbalvtspotpo2.bas.roche.com/callosum/v1/tspublic/v1/user/list");
// request.send;
// console.log(request)

// request.onload = () => {
//     console.log(request);
//     if (request.status==200) {
//         console.log(JSON.parse(request.response))
//     }
//     else {
//         console.log('ERROR ---' + request.status + ' --- ' + request.statusText)
//     }
//     }

// console.log(request.statusText)

//login 
// var clientId = "MyApp";
// var clientSecret = "MySecret";

// // var authorizationBasic = $.base64.btoa(clientId + ':' + clientSecret);
// var authorizationBasic = window.btoa(clientId + ':' + clientSecret);

// var request = new XMLHttpRequest();
// request.open('POST', oAuth.AuthorizationServer, true);
// request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
// request.setRequestHeader('Authorization', 'Basic ' + authorizationBasic);
// request.setRequestHeader('Accept', 'application/json');
// request.send("username=John&password=Smith&grant_type=password");

// request.onreadystatechange = function () {
//     if (request.readyState === 4) {
//        alert(request.responseText);
//     }
// };


// login fetch

// https://rbalvtspotpo2.bas.roche.com/callosum/v1/tspublic/v1/session/login',
//     headers={
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'X-Requested-By': 'ThoughtSpot',
//         'Accept': 'application/json',
//     }, 
//     data='username=tsadmin&password=Groszadajwiedzminowi$&rememberme=false', verify=False )


// console.log('logging....')
// fetch("https://rbalvtspotpo2.bas.roche.com/callosum/v1/tspublic/v1/session/login", {
//   method: 'POST',
//   mode: 'no-cors', // no-cors, *cors, same-origin
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded',
//     'X-Requested-By': 'ThoughtSpot',
//     'Accept': 'application/json',
//   },
//   body: "username=tsadmin&password=Groszadajwiedzminowi$&rememberme=false"
// })
//   .then(response => {
//     console.log(response)
//   })
//   .catch(err => {
//     console.log(err)
//   })




// // Users 
// const options = {
//     method: 'GET',
//     mode: 'no-cors'
//   };
  
// fetch('http://rbalvtspotpo2.bas.roche.com/callosum/v1/tspublic/v1/user/list', options)
//   .then(response => response.json())
//   .then(data => console.log(data));



const fetch = require('node-fetch');

fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => {
      console.log(err)
  })