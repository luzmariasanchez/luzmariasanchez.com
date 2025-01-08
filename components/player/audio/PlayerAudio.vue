<template>
  <audio>
    <source :src="url" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
</template>

<script>

export default {
  name: "PlayerAudio",
  props: {
    url: {
      type: String,
      required: true
    },
  },
}
</script>
