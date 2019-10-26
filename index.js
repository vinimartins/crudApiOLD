const express = require("express");

// FIREBASE
const firebase = require("firebase");
const firebaseConfig = require("./config/firebase");

//const firebaseApp = firebase.initializeApp(firebaseConfig);

//const db = firebaseApp.firestore();

const routes = require('./routes');

const bodyParser = require('body-parser');

const verifyToken = require('./middlewares/verifyToken');

const app = express();

app.use(bodyParser.json());
app.use(routes);

const Auth = require('./controllers/Auth');

app.post('/auth/', Auth.auth);

/*
***** mudamos pra routes/index.js
const Users = require('./controllers/Users');
app.get('/users/:id', verifyToken, Users.get);
*/

//app.get('/users', verifyToken, Users.list);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});