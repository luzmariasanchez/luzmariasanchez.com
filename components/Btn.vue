<template>

  <nuxt-link :to="to"
    class="bg-transparent border border-gray-500 hover:border-white text-xs text-gray-500 hover:text-white font-bold py-2 px-4 rounded-full">
    {{label}}
  </nuxt-link>

</template>

<script>

export default {
  name: "Btn",
  props: {
    to: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
  },
}
</script>
