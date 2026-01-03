<template>
  <div :class="['grid gap-5', place.image ? 'grid-cols-2' : 'grid-cols-1']">
    <figure v-if="place.image">
      <img :src="$imager(place.image, 'medium')" :alt="place.title" style="width:100%">
    </figure>
    <div :class="place.image ? 'text-left' : 'text-center'">
      <div class="text-gray-200">{{ place.title }}</div>
      <div v-if="place.address" class="text-gray-400 text-xs">{{ place.address }}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Place",
  props: {
    place: {
      type: Object,
      required: true
    },
  },
}
</script>
