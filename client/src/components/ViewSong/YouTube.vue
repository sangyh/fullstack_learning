<template>
  <panel title = "Youtube Video">
    <youtube
      :video-id="youtubeId"
      :player-width="800"
      :player-height="200">
    </youtube>
  </panel>
</template>

<script>

export default {
  props: [
    'youtubeId' 
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
