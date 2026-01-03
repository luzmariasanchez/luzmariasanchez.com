<template>
  <Link :url="sponsor.url" class="mx-4 mb-4 w-40">
  <figure v-if="sponsor.image" class="mb-2">
    <img :src="$imager(sponsor.image, 'thumb')" :alt="sponsor.title" class="w-full">
  </figure>
  <div class="text-center text-sm text-gray-200">
    {{ sponsor.title }}
  </div>
  </Link>
</template>

<script>

export default {
  name: "Sponsor",
  props: {
    sponsor: {
      type: Object,
      required: true
    },
  },
}
</script>
