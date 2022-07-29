<template>
  <div>
    <v-layout>
      <v-flex xs4>
        <panel title = "Song Metadata">
          <v-text-field
            label="Title"
            v-model="song.title"
          ></v-text-field>

          <v-text-field
            label="Artist"
            v-model="song.artist"
          ></v-text-field>

          <v-text-field
            label="Genre"
            v-model="song.genre"
          ></v-text-field>

          <v-text-field
            label="Album"
            v-model="song.album"
          ></v-text-field>

          <v-text-field
            label="Album Image Url"
            v-model="song.albumImageUrl"
          ></v-text-field>

          <v-text-field
            label="Youtube Id"
            v-model="song.youtubeId"
          ></v-text-field>
        </panel>
      </v-flex>

      <v-flex xs8>
        <panel title = "Song Structure" class = "ml-2">
          <v-textarea
            label="Tab"
            v-model="song.tab"
          ></v-textarea>

          <v-textarea
            label="Lyrics"
            v-model="song.lyrics"
          ></v-textarea>

          <v-btn class="cyan" dark
            @click="create">
            Create Song
        </v-btn>

        </panel>
      </v-flex>
    </v-layout>
  </div>

</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      }
    }
  },
  methods: {
    async create () {
      try {
        await SongsService.post(this.song)  // call create api
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: { 
    Panel
  }
}
</script>

<style scoped>
</style>
