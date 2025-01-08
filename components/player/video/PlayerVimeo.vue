<template>
  <iframe :src="`//player.vimeo.com/video/${id}?autoplay=${autoplay}&title=0&portrait=0`" :width="width"
    :height="height" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</template>

<script>

export default {
  name: "PlayerVimeo",
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
    autoplay: {
      type: Boolean,
      required: false,
      default() {
        return false;
      }
    },
  },
}
</script>
