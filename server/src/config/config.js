module.exports = {
    port: process.env.DB_NAME || 8081,
    db: {
        database: process.env.DB_NAME || 'tabtracker', //name of database or fall back to 'tabtracker'
        user: process.env.DB_USER || 'tabtracker',
        password: process.env.DB_PASS || 'tabtracker',
        options: {
            dialect: process.env.DIALECT || 'sqlite', //tell sequelze what type of db we are connecting to
            host: process.env.HOST || 'localhost', //location of database to connect to
            storage: './tabtracker.sqlite' //where to store sqlite file
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret' //used for signing jwt token by sending a string that is only known by server. if doesnt match, server will reject the token.
    }
}
