<template>
  <div id="app">
    <v-app>
      <page-header/>
      <v-main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header'

export default {
  name: 'App',
  components: {
    'page-header': PageHeader
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.danger-alert {
  color: red;
}
</style>
