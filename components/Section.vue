<template>
  <div class="mb-20 text-center">
    <Subtitle v-if="title" :title="title"></Subtitle>
    <div class="text-center text-gray-200">
      {{ content }}
    </div>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      required: false
    },
    content: {
      content: String,
      required: true
    },
  },
}
</script>
