const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')

module.exports = (app) => { //returns function where app can be passed to attach all endpoints to that express application
    app.post('/register',
        AuthenticationControllerPolicy.register, //validate inputs
        AuthenticationController.register)

    app.post('/login',
        AuthenticationController.login)

    app.get('/songs',
        SongsController.getAllSongs)
    app.get('/songs/:songId',
        SongsController.show)
    app.put('/songs/:songId',
        SongsController.put)
    app.post('/songs',
        SongsController.post)
}
