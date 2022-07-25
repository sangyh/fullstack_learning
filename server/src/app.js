const express = require('express')
const bodyParser = require('body-parser') //process json data easily
const cors = require('cors') //allows other clients to access our endpoints; could be security risk
const morgan = require('morgan') //log 
const {sequelize} = require('./models') //assumes theres a models folder with an index.js file that returns a sequelize object
const config = require('./config/config')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync({force: false}) //connects squelize to database to create tables 
    .then(() => {
        app.listen(config.port) //runs expressjs server on port from config.pot
        console.log(`Server started on port ${config.port}`)
    })
    