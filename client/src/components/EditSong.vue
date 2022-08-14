<template>
  <div>
    <v-layout>
      <v-flex xs4>
        <panel title = "Song Metadata">
          <v-text-field
            label="Title"
            :rules = "[required]"
            v-model="song.title"
          ></v-text-field>

          <v-text-field
            label="Artist"
            :rules = "[required]"
            v-model="song.artist"
          ></v-text-field>

          <v-text-field
            label="Genre"
            :rules = "[required]"
            v-model="song.genre"
          ></v-text-field>

          <v-text-field
            label="Album"
            :rules = "[required]"
            v-model="song.album"
          ></v-text-field>

          <v-text-field
            label="Album Image Url"
            :rules = "[required]"
            v-model="song.albumImageUrl"
          ></v-text-field>

          <v-text-field
            label="Youtube Id"
            :rules = "[required]"
            v-model="song.youtubeId"
          ></v-text-field>
        </panel>
      </v-flex>

      <v-flex xs8>
        <panel title = "Song Structure" class = "ml-2">
          <v-textarea
            label="Tab"
            :rules = "[required]"
            v-model="song.tab"
          ></v-textarea>

          <v-textarea
            label="Lyrics"
            :rules = "[required]"
            v-model="song.lyrics"
          ></v-textarea>
        </panel>

        <div class = "danger-alert" v-if = "error"> <!-- only display if error is defined -->
          {{error}}
        </div>

        <v-btn class="cyan" dark
          @click="save">
          Save Song
        </v-btn>

       
      </v-flex>
    </v-layout>
  </div>

</template>

<script>
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
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async save () {
      this.error = null // default state
      const areAllFieldsFilledIn = Object 
        .keys(this.song) // loop over all keys of song
        .every(key => !!this.song[key]) // verify all values using the keys is defined
      
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all required fields.'
        return
      }

      const songId = this.$store.state.route.params.songId //grabs state from vuex store; route is defined from the sync(store, route) line in main.js. so whenever router changed in UI, it syncs with store
      try {
        await SongsService.put(this.song)
        this.$router.push({ // redirct to songs page after saving
          name: 'song',
          params: {
            songId: songId
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId //grabs state from vuex store; route is defined from the sync(store, route) line in main.js. so whenever router changed in UI, it syncs with store
      this.song = (await SongsService.show(songId)).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>
</style>
