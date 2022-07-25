/* List all endpoitns relating to authentication */
const {Song} = require('../models')

module.exports = {
    async getAllSongs (req, res) {
        try {
            const songs = await Song.findAll({
                limit: 10 // return 10 songs for now
            })
            res.send(songs)
        } catch (err) {
            console.log('in catch block')
            res.status(500).send({
                error: 'An error has occurred trying fetch songs.'
            })
        }
    },
    async post (req, res) {
        try {
            const song = await Song.create(req.body)
            res.send(song)            
        } catch (err) {
            console.log('in catch block')
            res.status(500).send({
                error: 'An error has occurred trying create the song.'
            })
        }
    }
}
