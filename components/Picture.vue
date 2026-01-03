<template>
  <figure class="w-full">
    <img :src="$imager(url, 'thumb')" :alt="alt" class="w-full">
  </figure>
</template>

<script>
export default {
  name: "Picture",
  props: {
    url: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: false
    },
  },
}
</script>
