<template>
  <v-toolbar class="cyan shrink" dark>
    <v-toolbar-title class="mr-4">
      <router-link class="home" tag="span"
        :to="{
          name: 'songs'
        }">
        TabTracker
      </router-link>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn
        :to="{name:'songs'}"
        text
        dark>
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        :to="{name:'login'}"
        text
        dark>
        Login
      </v-btn>

      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        :to="{name:'register'}"
        text
        dark>
        Sign Up
      </v-btn>

      <v-btn
        v-if="$store.state.isUserLoggedIn"
        to="songs"
        text
        dark
        @click="logout">
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null) //this will cause isUserLoggedIn in store.js to be set to False
      this.$store.dispatch('setUser', null)
    }
  }
}
</script>
<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color:blueviolet
}
</style>
