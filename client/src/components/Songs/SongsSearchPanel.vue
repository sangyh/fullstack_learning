<template>
  <panel title="Search">
    <v-text-field
      label="Search by song title, artist, album or genre"
      v-model="search"
    ></v-text-field>

  </panel>

</template>

<script>
import _ from 'lodash' // for optimization, we will use debounce module from lodash to add delay before making server requests

export default {
  data () {
    return {
      search: ''
    }
  },
  watch: { // watches the value of text typed in search box
    // we want to update query string with search text so that it is easily shareable. so as user types search string, we push new route
    search: _.debounce(async function (value) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') { // only build query string after something is typed
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route) // push route
    }, 700), // adds 700 ms delay before making server requests
    '$route.query.search' : { // when refreshed, keep router from previous search 
      immediate: true, // if $route.query.search is defined, it will call handler
      handler (value) {
        this.search = value // reassign search to value in handler
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
