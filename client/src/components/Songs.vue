<template>
  <v-container fluid column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <!-- <router-link :to = "{name: 'songs-create'}"> -->
        <v-btn
          slot = "action"
          class = "cyan accent-2"
          light
          medium
          absolute
          right
          middle
          fab
          to='songs/create'>
            <v-icon>add</v-icon>
        </v-btn>
        <!-- </router-link> -->
        
        <div v-for="song in songs"
          :key="song.id">
          {{song.title}}
          {{song.artist}}
          {{song.album}}  
        </div>
      </panel> 
    </v-flex>
  </v-container>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    //as soon as this SOngs component is mounted on page, do a request to back end for al songs
    this.songs = (await SongsService.getAllSongs()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
