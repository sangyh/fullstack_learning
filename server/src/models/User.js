module.exports = (sequelize,DataTypes) => //user.js is a function that takes in sequelize and datatypes
    sequelize.define('User', { //define User table
        email: {
            type: DataTypes.STRING,
            unique:true
        },
        password: DataTypes.STRING
    })
