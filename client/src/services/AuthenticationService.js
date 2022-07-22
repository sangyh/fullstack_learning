import Api from '@/services/Api'

export default {
    register (credentials) {
        return Api().post('register', credentials) // pass credentials to post method of axios module to hit a register endpoint
    },
    login (credentials) {
        return Api().post('login', credentials) // pass credentials to post method of axios module to hit a register endpoint
    }
}
