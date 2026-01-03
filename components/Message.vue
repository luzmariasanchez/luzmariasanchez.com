<template>
  <div class="text-center text-gray-300 mt-10">
    {{ text }}
  </div>
</template>

<script>

export default {
  name: "Message",
  props: {
    text: {
      type: String,
      required: true
    },
  },
}
</script>
