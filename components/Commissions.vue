<template>
  <div class="mb-20 text-center">
    <Subtitle :title="label || $t('content.commissions')"></Subtitle>
    <div class="flex flex-wrap justify-center">
      <Commission v-for="(commission, commissionIndex) in commissions" :key="commissionIndex" :commission="commission">
      </Commission>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    commissions: {
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
