const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => { //returns function where app can be passed to attach all endpoints to that express application
    app.post('/register',
        AuthenticationControllerPolicy.register, //validate inputs
        AuthenticationController.register),

    app.post('/login',
        AuthenticationController.login)
}
