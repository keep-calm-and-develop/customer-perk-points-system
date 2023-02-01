# Getting Started with Frontend application
Frontend application to add customer and transactions, And to get customer's reward points based on purchases.

## Technologies used
- React
- React Router V6 (Routing)
- CSS3
- HTML5
- Axios (Rest API client)
- Jest (Testing)
- Date fns (Date manipulation)
- Husky (Pre commit hook)
- Lint staged (Apply ESLint rules for staged files)
- Prop Types (Component's props validation)

## Pre-requisites
- Node version >= 14.20.
- Backend server is running successfully (check out ReadMe of backend directory).

## Install
Make sure you are in frontend directory.

```sh
npm install
```

## Usage
Start the application

```sh
npm start
```

And enter `http://localhost:3000/` in the browser

## Testing
To run unit tests

```sh
npm run test
```

To get the test coverage

```sh
npm run test --coverage --watchAll
```

### Deployment

```sh
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
