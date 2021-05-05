var xhr = new XMLHttpRequest();
xhr.open("POST", 'https://rbalvtspotpo2.bas.roche.com/callosum/v1/tspublic/v1/session/login', true);

//Send the proper header information along with the request
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader('X-Requested-By', 'ThoughtSpot');
xhr.setRequestHeader('Accept', 'application/json');

xhr.onreadystatechange = function() { // Call a function when the state changes.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        // Request finished. Do processing here.
    }
}

xhr.send("username=tsadmin&password=Groszadajwiedzminowi$&rememberme=false");
// xhr.send(new Int8Array()); 
// xhr.send(document);