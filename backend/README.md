# Getting Started with Backend server
Backend server to handle API requests and database connection for reward based system frontend application.

## Technologies used
- Node JS (Runtime)
- Express JS (Server and API services)
- LowDB (Database)
- NodeMon (Server Monitoring)
- Morgan (Logging)
- Cors (Handle CORS)
- Body Parser (URL encoding and JSON parsing)
- Date fns (Date manipulation)

## Pre-requisites
Node version >= 14.20

## Install
Make sure you are in backend directory.

```sh
npm install
```

## Usage
Start the server using

```sh
npm start
```

## Testing
To run unit tests

```sh
npm run test
```

## API
Test APIs using Postman

#### Get All Customers with reward point details
URL: `http://localhost:3080/api/customers`
METHOD: GET

#### Add Purchase Transaction
URL: `http://localhost:3080/api/customer/transaction/`
METHOD: POST
REQUEST BODY: 
```json
{
    "amount": 120.50,
    "customerName": "User"
}
```

#### Add Customer
URL: `http://localhost:3080/api/customer/`
METHOD: POST
REQUEST BODY: 
```json
{
    "name": "User"
}
```

#### Test Data
Directly modify db.json to create mock data for the tests.