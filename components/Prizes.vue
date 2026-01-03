<template>
  <div class="mb-20 text-center">
    <Subtitle :title="label || $t('content.prizes')"></Subtitle>
    <div class="flex flex-wrap justify-center">
      <Prize v-for="(prize, prizeIndex) in prizes" :key="prizeIndex" :prize="prize">
      </Prize>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    prizes: {
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
