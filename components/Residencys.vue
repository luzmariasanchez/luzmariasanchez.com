<template>
  <div class="mb-20 text-center">
    <Subtitle :title="label || $t('content.residencys')"></Subtitle>
    <div class="flex flex-wrap justify-center">
      <Residency v-for="(residency, residencyIndex) in residencys" :key="residencyIndex" :residency="residency">
      </Residency>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    residencys: {
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
