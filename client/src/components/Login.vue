<template>
  <v-container fluid column>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
        <v-text-field
          label="Email"
          placeholder="email"
          v-model="email"
        ></v-text-field>
        <br>
        <v-text-field
          label="Password"
          type="password"
          placeholder="password"
          v-model="password"
        ></v-text-field>
        <br>
        <div class="danger-alert" v-html="error"/>
        <br>
        <v-btn class="cyan" dark
            @click="login">
            Login
        </v-btn>
      </panel>
    </v-flex>
  </v-container>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token) // call setToken action in vuex store
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({ // redirct to songs page after login
          name: 'songs'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
