<template>
  <NuxtLink :to="localePath({ name: `collection-slug`, params: { slug: collection.slug } })">
    <div class="text-center text-sm text-gray-200">
      {{ collection.title }}
    </div>
  </NuxtLink>
</template>

<script>

export default {
  name: "Collection",
  props: {
    collection: {
      type: Object,
      required: true
    },
  },
}
</script>
