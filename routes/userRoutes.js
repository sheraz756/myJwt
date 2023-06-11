const {createUser,login,getUsers} = require('../controller/userController')
const express = require('express')
const router = express.Router()
const {verifyToken} = require('../middleware/jwtMiddleware')
router.post('/createUser',createUser)
router.post('/login',login)
router.get('/getUsers',getUsers)

module.exports = router
