
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

const axios = require('axios')
const https = require('https')

const params = new URLSearchParams();
params.append('username', 'tsadmin');
params.append('password', 'Groszadajwiedzminowi$');
params.append('rememberme', false);

const httsAgent = new https.Agent({ rejectUnauthorized: false });

axios.post('https://rbalvtspotpo2.bas.roche.com/callosum/v1/tspublic/v1/session/login',  
params, 
  {
      mode: 'no-cors',
      headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-Requested-By': 'ThoughtSpot',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
    //authorization: 'Bearer 123abc456def'
  }
},
{ httsAgent }
)
.then((res) => {
  console.log(res.data)
})
.catch((error) => {
  console.error(error)
})