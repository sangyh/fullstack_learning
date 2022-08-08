import Api from '@/services/Api'

export default { 
    getAllSongs () { // make get request to song endpoint
        return Api().get('songs')
    },
    show (songId) {
        return Api().get(`songs/${songId}`)
    },
    post (song) { // send song data to create endpoint
        return Api().post('songs', song)
    },
    put (song) { // send song data to song endpoint
        return Api().put(`songs/${song.id}`, song)
    }
}
