<template>
  <panel title = "Song Metadata">
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
            name: 'song-edit',
            params: {
              songId: song.id
            }
          }"
          >
          Edit
        </v-btn>
      </v-flex>

      <v-flex xs6>
        <img class = "album-image" :src = "song.albumImageUrl"/>
        <br/>
        {{song.album}}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  props: [
    'song' 
  ],
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
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
