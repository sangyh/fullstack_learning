<template>
  <v-toolbar class="cyan shrink" dark>
    <v-toolbar-title class="mr-4">
      <router-link class="home" tag="span"
        :to="{
          name: 'root'
        }">
        TabTracker
      </router-link>
    </v-toolbar-title>

    <!-- <v-toolbar-items>
      <v-btn flat dark class="cyan">
        Browse
      </v-btn>
    </v-toolbar-items> -->

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        to="login"
        text
        dark
        class="cyan">
        Login
      </v-btn>

      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        to="register"
        text
        dark
        class="cyan">
        Sign Up
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
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
