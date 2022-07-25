module.exports = (sequelize, DataTypes) => {
    const Song = sequelize.define('Song', { //define Song model attributes
        // title: DataTypes.STRING,
        title: {
            type: DataTypes.STRING,
            validate: {notEmpty: false}
          },
        artist: DataTypes.STRING,
        genre: DataTypes.STRING,
        album: DataTypes.STRING,
        albumImage: DataTypes.STRING,
        youtubeId: DataTypes.STRING,
        lyrics: DataTypes.TEXT,
        tab: DataTypes.TEXT
    })

    return Song
}
