/* 
this file reads and loads all models, loads them to Sequelize and returns them  
*/
const fs = require ('fs') //node js way of reading through filesystem 
const path = require('path') //dealing with absolute/relative paths
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize( //sequelize object
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options

)

//write functionality to read through all models in models folder and set up to be used by sequelize
fs
    .readdirSync(__dirname) //read thorugh curr director and return array of files
    .filter((file) =>     //filter our files equivalent to index.js (we want every other file)
        file!='index.js'
    )
    .forEach(file => {
        //const model = sequelize.import(path.join(__dirname,file))
        const model = require(path.join(__dirname,file))(sequelize,Sequelize.DataTypes)
        db[model.name] = model
    });

db.sequelize = sequelize
db.Sequelize = Sequelize


module.exports = db
