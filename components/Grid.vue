<template>
  <div>
    <div v-if="items && items.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Bloc v-for="(item, itemIndex) in items" :key="itemIndex" :item="item" :size="size" :pathName="pathName"></Bloc>
    </div>
    <template v-else>
      <Message :text="$t('message.empty')"></Message>
    </template>
  </div>
</template>

<script>

export default {
  name: "Grid",
  props: {
    items: {
      type: Array,
      required: true,
    },
    size: {
      type: String,
      required: false,
      default() {
        return ''
      }
    },
    pathName: {
      type: String,
      required: false,
    }
  },
}
</script>
