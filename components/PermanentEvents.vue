<template>
  <div>
    <div v-if="items && items.length" class="flex flex-col gap-6">
      <PermanentEvent v-for="(item, itemIndex) in items" :key="itemIndex" :item="item" :pathName="pathName">
      </PermanentEvent>
    </div>
    <template v-else>
      <Message :text="$t('message.empty')"></Message>
    </template>
  </div>
</template>

<script>

export default {
  name: "PermanentEvents",
  props: {
    items: {
      type: Array,
      required: true,
    },
    pathName: {
      type: String,
      required: false,
    }
  },
}
</script>
