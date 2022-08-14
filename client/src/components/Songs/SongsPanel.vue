<template>
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
      :to="{name: 'songs-create'}">
        <v-icon>add</v-icon>
    </v-btn>
    <!-- </router-link> -->
    
    <div v-for="song in songs"
      class="song"
      :key="song.id">

      <v-layout>
        <v-flex xs6>
          <div class = "song-title">
            {{song.title}}
          </div>
          <div class = "song-artist">
            {{song.artist}}
          </div>
          <div class = "song-genre">
            {{song.genre}}
          </div> 
          
          <v-btn class="cyan" dark
            :to="{
              name: 'song',
              params: {
                songId: song.id
              }
            }"
            >
            View
          </v-btn>
        </v-flex>

        <v-flex xs6>
          <img class = "album-image" :src = "song.albumImageUrl"/>
        </v-flex>
      </v-layout>
    </div>
  </panel> 
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      songs: null
    }
  },
  watch : {
    '$route.query.search': { //
      immediate: true, // if $route.query.search is defined, it will call handler
      async handler (value) {
        this.songs = (await SongsService.getAllSongs(value)).data 
      }
    }
  }
  /* mounted is no longer needed after adding mounted 
  async mounted () {
    //as soon as this Songs component is mounted on page, do a request to back end for al songs
    this.songs = (await SongsService.getAllSongs()).data
  } */
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song {
  padding: 20px;
  height: 330px;
}

.song-title{
  font-size: 30px;
}

.song-artist{
  font-size: 24px;
}

.song-genre{
  font-size: 18px;
}

.album-image{
  width: 70%;
  margin: 0 auto;
}
</style>
