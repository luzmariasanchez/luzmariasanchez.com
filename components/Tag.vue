<template>
  <nuxt-link :to="localePath({ name: 'works-t-tag', params: { tag: tag.slug } })"
    class="inline-block bg-gray-600 hover:bg-gray-500 text-sm text-white px-2 py-1 mr-1 mb-1 rounded">#{{
    tag.title
    }}
  </nuxt-link>
</template>

<script>

export default {
  name: "Tag",
  props: {
    tag: {
      type: Object,
      required: true
    },
  },
}
</script>
