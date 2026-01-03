<template>
  <div class="mb-20 text-center">
    <Subtitle :title="label || $t('content.grants')"></Subtitle>
    <div class="flex flex-wrap justify-center">
      <Grant v-for="(grant, grantIndex) in grants" :key="grantIndex" :grant="grant">
      </Grant>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    grants: {
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
