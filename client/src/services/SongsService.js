import Api from '@/services/Api'

export default { 
    getAllSongs () { // make get request to song endpoint
        return Api().get('songs')
    },
    post (song) { // send song data to create endpoint
        return Api().post('songs', song)
    }
}
