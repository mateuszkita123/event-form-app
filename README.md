This project is simple Event Form containing fields listed below:
-First name (required)
-Last name (required)
-Email (required, valid email address)
-Event date (required, simple date picker)

The frontend is written in React using Redux.
Data from form is saved in local MongoDB database.
Data from form is validated before saving.
Some possible errors are handled and displayed for the user using alert pop-ups.
Some parts of app are tested using JEST.js and Enzyme.
UI is is implemented using Twitter Bootstrap.

## Steps to run Event Form App

In the project directory, you can run:

### Use script `npm install`

NPM will install all necessary packages to run app.<br />


## Running MongoDB database

To run database after installing MongoDB go to MongoDB directory and run mongod.exe

example of mongod.exe location: C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe


## Running backend of app

In the backend directory, you can run:

### `node server`

Node will start serving app on [http://localhost:4000](http://localhost:4000).<br />


## Scripts Available to run frontend of app

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Testing app using `npm test`

Launches the test runner.<br />
