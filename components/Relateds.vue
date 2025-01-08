<template>
  <div>
    <template v-if="items && items.length">
      <Subtitle :title="title || $t('content.relateds')"></Subtitle>
      <Grid :items="items" size="small"></Grid>
    </template>
  </div>
</template>

<script>

export default {
  name: "Relateds",
  props: {
    items: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: false
    },
  },
}
</script>
