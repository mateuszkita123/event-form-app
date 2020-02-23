This project is simple Event Form containing fields listed below:<br />
-First name (required)<br />
-Last name (required)<br />
-Email (required, valid email address)<br />
-Event date (required, simple date picker)<br />
<br />
The frontend is written in React using Redux.<br />
Data from form is saved in local MongoDB database.<br />
Data from form is validated before saving.<br />
Some possible errors are handled and displayed for the user using alert pop-ups.<br />
Some parts of app are tested using JEST.js and Enzyme.<br />
UI is is implemented using Twitter Bootstrap.<br />
<br />

## Steps to run Event Form App

In the project directory, you can run:

### Use script `npm install`

NPM will install all necessary packages to run app.<br />

<br />
## Running MongoDB database

To run database after installing MongoDB go to MongoDB directory and run mongod.exe

example of mongod.exe location: C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe

<br />
## Running Backend of app

In the backend directory, you can run:

### `node server`

Node will start serving app on [http://localhost:4000](http://localhost:4000).<br />

<br />
## Running Frontend of app

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Testing app using `npm test`

Launches the test runner from main directory.<br />
