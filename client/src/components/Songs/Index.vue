<template>
  <v-container fluid column>
    <v-flex xs6 offset-xs3>
      <songs-search-panel />
      <songs-panel class = "mt-2" />
    </v-flex>
  </v-container>
</template>

<script>
import SongsSearchPanel from './SongsSearchPanel'
import SongsPanel from './SongsPanel'
import SongsService from '@/services/SongsService'

export default {
  components: {
    SongsPanel,
    SongsSearchPanel
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
