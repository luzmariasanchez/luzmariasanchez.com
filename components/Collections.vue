<template>
  <div class="mb-20 text-center">
    <Subtitle :title="label || $t('content.collections')"></Subtitle>
    <div class="flex flex-wrap justify-center">
      <Collection v-for="(collection, collectionIndex) in collections" :key="collectionIndex" :collection="collection">
      </Collection>
    </div>
  </div>
</template>

<script>

export default {
  name: "Sponsors",
  props: {
    collections: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      required: false
    },
  },
}
</script>
