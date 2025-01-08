<template>
  <div class="mb-20 text-center">
    <Tag v-for="(tag, tagIndex) in tags" :key="tagIndex" :tag="tag"></Tag>
  </div>
</template>

<script>

export default {
  name: "Tags",
  props: {
    tags: {
      type: Array,
      required: true
    },
  },
}
</script>
