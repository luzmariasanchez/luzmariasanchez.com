<template>
  <div class="block mb-3 text-white text-xl text-center">
    {{ address }}
  </div>
</template>

<script>

export default {
  props: {
    address: {
      type: String,
      required: true
    }
  },
}
</script>
