<template>
  <div class="w-full">
    <img :src="$imager(url, 'full')" :alt="alt" :style="{ width: '100%' }" class="rounded-lg">
    <div v-if="legend" class="flex flex-row-reverse text-gray-200 text-sm italic">
      <div>{{ legend }}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Banner",
  props: {
    url: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    legend: {
      type: String,
      required: false
    },
  },
}
</script>
