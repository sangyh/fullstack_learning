/* List all endpoitns relating to authentication */
const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

//helper method to send back jwt token when user signs in
function jwtSignUser (user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register (req, res) {
        try{
            const user = await User.create(req.body)
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (err) {
            res.status(400).send({
                error: 'This email account is already in use.'
            })
        }
    },
    async login (req, res) {
        try{
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            
            if (!user) {
                return res.status(403).send({
                    error: 'Login information was incorrect'
                })
            } 

            const isPasswordValid = await user.comparePassword(password)
            if (!isPasswordValid) {
                return res.status(403).send({
                    error: 'Login information was incorrect'
                })
            }

            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson) //will see token on postman 
            })
        } catch (err) {
            res.status(500).send({
                error: 'An error has occurred trying to login.'
            })
        }
    }
}