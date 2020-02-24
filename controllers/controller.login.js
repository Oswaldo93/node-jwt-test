
const jwt = require('jsonwebtoken');


const login = (req,res) => {
    const { username } = req.body;
    const payload = { username };
    const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
    res.status(200).send({ token });
}

const testProtectedFunction = (req, res) => {
    res.status(200).send('You could access because you have a token');
}

module.exports = {
    login,
    testProtectedFunction
};