const {Router} = require('express');
const { login, testProtectedFunction } = require('../controllers/controller.login');
const { authenticateToken } = require('../middleware/middleware.authenticate');

const router = require('express').Router();

router.post('/login', login);
router.get('/protected', authenticateToken, testProtectedFunction);

module.exports = {
    router
};


