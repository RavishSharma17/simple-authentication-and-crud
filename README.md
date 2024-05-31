# Documentation
(Also provided sample curl requests and their reponse)

## User Authentication

### POST /api/auth/register
`Register new user`

* Request
```
curl --request POST \
  --url http://localhost:3000/api/auth/register \
  --header 'Content-Type: application/json' \
  --header 'Cookie: connect.sid=s%253AGzVCKDcVtovnwKUpISsXSsLJtg2KnLDc.MGRcudfpUriDVna3c8HLHZmts5ZGrG91inzhhNjXdoQ' \
  --cookie connect.sid=s%253AGzVCKDcVtovnwKUpISsXSsLJtg2KnLDc.MGRcudfpUriDVna3c8HLHZmts5ZGrG91inzhhNjXdoQ \
  --data '{
	"username": "ravish sharma",
	"password": "secret"
}'
```

* Response
```
{
	"id": 1,
	"username": "ravish sharma",
	"password": "$2a$10$LWhl47NyJmERLJwZ/9.GQurvBRy00jScqbQ4.raDY5FJPiP1568Ky",
	"updatedAt": "2024-05-30T21:50:54.862Z",
	"createdAt": "2024-05-30T21:50:54.862Z"
}
```
### POST /api/auth/login
`Login new user`

* Request
```
curl --request POST \
  --url http://localhost:3000/api/auth/login \
  --header 'Content-Type: application/json' \
  --header 'Cookie: connect.sid=s%253AGzVCKDcVtovnwKUpISsXSsLJtg2KnLDc.MGRcudfpUriDVna3c8HLHZmts5ZGrG91inzhhNjXdoQ' \
  --cookie connect.sid=s%253AGzVCKDcVtovnwKUpISsXSsLJtg2KnLDc.MGRcudfpUriDVna3c8HLHZmts5ZGrG91inzhhNjXdoQ \
  --data '{
	"username": "ravish sharma",
	"password": "secret"
}'
```

* Response
```
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJyYXZpc2ggc2hhcm1hIiwiaWF0IjoxNzE3MTA1OTYxfQ.gVXfSxVn2S7Xcz2B5zuZuxiKttJORhGLLSxQC3ADRuc"
}
```

## Products

### POST /api/products/
`Create product`

* Request
```
curl --request POST \
  --url http://localhost:3000/api/products \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJyYXZpc2ggc2hhcm1hIiwiaWF0IjoxNzE3MTA1OTYxfQ.gVXfSxVn2S7Xcz2B5zuZuxiKttJORhGLLSxQC3ADRuc' \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/9.2.0' \
  --cookie connect.sid=s%253AGzVCKDcVtovnwKUpISsXSsLJtg2KnLDc.MGRcudfpUriDVna3c8HLHZmts5ZGrG91inzhhNjXdoQ \
  --data '{
	"name": "Shampoo",
	"description": "For very long hair and climate friendly",
	"price": 606.12
}'
```

* Response
```
{
	"id": 1,
	"name": "Shampoo",
	"description": "For very long hair and climate friendly",
	"price": 606.12,
	"updatedAt": "2024-05-30T21:57:56.648Z",
	"createdAt": "2024-05-30T21:57:56.648Z"
}
```

### GET /api/products/
`List products`

* Request
```
curl --request GET \
  --url http://localhost:3000/api/products \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJyYXZpc2ggc2hhcm1hIiwiaWF0IjoxNzE3MTA1OTYxfQ.gVXfSxVn2S7Xcz2B5zuZuxiKttJORhGLLSxQC3ADRuc' \
  --header 'User-Agent: insomnia/9.2.0' \
  --cookie connect.sid=s%253AGzVCKDcVtovnwKUpISsXSsLJtg2KnLDc.MGRcudfpUriDVna3c8HLHZmts5ZGrG91inzhhNjXdoQ
```

* Response
```
[
	{
		"id": 1,
		"name": "Shampoo",
		"description": "For very long hair and climate friendly",
		"price": 606.12,
		"createdAt": "2024-05-30T21:57:56.648Z",
		"updatedAt": "2024-05-30T21:57:56.648Z"
	}
]
```

### PUT /api/products/:id
`Update product`

* Request
```
curl --request PUT \
  --url http://localhost:3000/api/products/1 \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJyYXZpc2ggc2hhcm1hIiwiaWF0IjoxNzE3MTA1OTYxfQ.gVXfSxVn2S7Xcz2B5zuZuxiKttJORhGLLSxQC3ADRuc' \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/9.2.0' \
  --cookie connect.sid=s%253AGzVCKDcVtovnwKUpISsXSsLJtg2KnLDc.MGRcudfpUriDVna3c8HLHZmts5ZGrG91inzhhNjXdoQ \
  --data '{
	"name": "Shampoo",
	"description": "For very long hair and NOT climate friendly",
	"price": 200.11
}'
```

* Response
```
[
	1
]
```

### DELETE /api/products/:id
`Delete product`

* Request
```
curl --request DELETE \
  --url http://localhost:3000/api/products/1 \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJyYXZpc2ggc2hhcm1hIiwiaWF0IjoxNzE3MTA1OTYxfQ.gVXfSxVn2S7Xcz2B5zuZuxiKttJORhGLLSxQC3ADRuc' \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/9.2.0' \
  --cookie connect.sid=s%253AGzVCKDcVtovnwKUpISsXSsLJtg2KnLDc.MGRcudfpUriDVna3c8HLHZmts5ZGrG91inzhhNjXdoQ
```

* Response
```
{
	"message": "Product deleted"
}
```

## Invalid request
If the bearer token is not valid then the response is 400 Bad Request and the message is `Invalid token.`

## Validation errors
* Malformed/incorrect parameters will be caught

* Request
```
{
	"errors": [
		{
			"type": "field",
			"value": "",
			"msg": "Invalid value",
			"path": "name",
			"location": "body"
		}
	]
}
```

* Response
```
{
	"errors": [
		{
			"type": "field",
			"value": "",
			"msg": "Invalid value",
			"path": "name",
			"location": "body"
		}
	]
}
```

## Postgres

### Table creation
Not required as this will be automatically created at startup due to sync process

### Server creds
Adjust the credentials in config/config.json and your jwt private key in middleware/auth.js and in controller/authController.js


## How to run the App
Run the app by using the command `npm run start`.
