const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs')) //takes any typical function that has callback structure and allow us to wrap it to use promise format

function hashPassword (user, options) {
    const SALT_FACTOR = 8

    if (!user.changed('password')) { //if password unchanged, exit function
        return;
    }

    return bcrypt //if password has changed
        .genSaltAsync(SALT_FACTOR) //generate using salt factor
        .then(salt => bcrypt.hashAsync(user.password, salt, null)) //then salt the plain text password to create hash
        .then(hash => { //take the hash and  update the users password value
            user.setDataValue('password', hash)
        })
}

module.exports = (sequelize,DataTypes) => {//user.js is a function that takes in sequelize and datatypes
    const User = sequelize.define('User', { //define User table
        email: {
            type: DataTypes.STRING,
            unique:true
        },
        password: DataTypes.STRING
    },{
        hooks: { //before saving user object, we hash password
            //beforeUpdate: hashPassword,
            beforeSave: hashPassword
        }
    })

    User.prototype.comparePassword = function (password) {
        return bcrypt.compareAsync(password, this.password)    
    }

    return User
}