console.log("hello")
const express = require('express')
const bodyParser = require('body-parser') //process json data easily
const cors = require('cors') //allows other clients to access our endpoints; could be security risk
const morgan = require('morgan') //log

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req,res) => {
    res.send({
        message: 'hello world!'
    })
})

app.listen(process.env.PORT || 8081) //runs expressjs server on port 8081 or other env variables
