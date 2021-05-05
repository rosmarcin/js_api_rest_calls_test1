import requests
import json
from requests.packages.urllib3.exceptions import InsecureRequestWarning
import urllib

requests.packages.urllib3.disable_warnings(InsecureRequestWarning)


#https://rbalvtspotpo2.bas.roche.com/callosum/v1/tspublic/v1/session/login

# r = requests.post('http://httpbin.org/post', data=json.dumps({'hi': 'there'}), headers={'Content-Type': 'application/json'})
# >>> r.status_code

print('requesting..')
session = requests.Session()
params = {'username': 'tsadmin', 'password': 'Groszadajwiedzminowi$'}

#encoded_params = urllib.parse.urlencode(params)

result = session.post('https://rbalvtspotpo2.bas.roche.com/callosum/v1/tspublic/v1/session/login',
    headers={
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-By': 'ThoughtSpot',
        'Accept': 'application/json',
    }, 
    data='username=tsadmin&password=Groszadajwiedzminowi$&rememberme=false', verify=False )

print(result)
print(result.cookies)

print('Getting user list')
user_list=session.get('http://rbalvtspotpo2.bas.roche.com/callosum/v1/tspublic/v1/user/list')
print(user_list.text)