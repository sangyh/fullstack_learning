<template>
  <panel title="Lyrics">
    <textarea 
      readonly
      v-model = "song.lyrics">
    </textarea>
  </panel>
</template>

<script>

export default {
  props: [
    'song' 
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
</style>
