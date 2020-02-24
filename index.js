require('dotenv').config();

const express = require('express');
const {router} = require('./routes/routes');
const {login} = require('./controllers/controller.login');

const app = express();

app.use(express.json());

app.use('/api', router);

app.get('/', (req, res) => {
    res.status(200).send('Something my friend');
})


app.listen(3000, function () {
    console.log('Listening on port 3000');
});