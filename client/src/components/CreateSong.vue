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
          @click="create">
          Create Song
        </v-btn>

       
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
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      this.error = null // default state
      const areAllFieldsFilledIn = Object 
        .keys(this.song) // loop over all keys of song
        .every(key => !!this.song[key]) // verify all values using the keys is defined
      
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all required fields.'
        return
      }

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
