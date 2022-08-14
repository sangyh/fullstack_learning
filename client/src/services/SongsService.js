import Api from '@/services/Api'

export default { 
    getAllSongs (search) { // make get request to song endpoint
        return Api().get('songs', { // if search is passed, this will send ajax request with search string to the endpoint
            params: {
                search: search
            }
        })
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
