<template>
  <iframe :width="width" :height="height" :src="`https://www.youtube.com/embed/${id}?rel=0&amp;showinfo=0`"
    frameborder="0" allowfullscreen></iframe>
</template>

<script>

export default {
  name: "PlayerYoutube",
  props: {
    id: {
      type: String,
      required: true
    },
    width: {
      type: String,
      required: false,
      default() {
        return '100%';
      }
    },
    height: {
      type: String,
      required: false,
      default() {
        return '320px';
      }
    },
  },
}
</script>
