<template>
  <div>
    <div v-if="items.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Bloc v-for="(item, itemIndex) in items" :key="itemIndex" :item="item" :class="getClassByIndex(itemIndex)"
        :imageStore="getImageStoreByIndex(itemIndex)"></Bloc>
    </div>
    <template v-else>
      <Message :text="$t('message.empty')"></Message>
    </template>
  </div>
</template>

<script>

export default {
  name: "GridHome",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  setup() {
    function getClassByIndex(index) {
      switch (index) {
        case 0:
          return 'col-span-1 md:col-span-2 lg:col-span-4';
        case 1:
        case 2:
          return 'col-span-1 md:col-span-1 lg:col-span-2';
        case 3:
        case 4:
          return 'col-span-1 md:col-span-1 lg:col-span-1';
        case 5:
          return 'col-span-1 md:col-span-1 lg:col-span-2';
        case 6:
        case 7:
          return 'col-span-1 md:col-span-1 lg:col-span-2';
        default:
        case 8:
          return 'col-span-1 md:col-span-1 lg:col-span-2';
        case 9:
          return 'col-span-1 md:col-span-1 lg:col-span-1';
        case 10:
          return 'col-span-1 md:col-span-1 lg:col-span-1';
        case 11:
        case 12:
        case 13:
        case 14:
          return 'col-span-1 md:col-span-1 lg:col-span-1';
          return '';
      }
    }
    function getImageStoreByIndex(index) {
      switch (index) {
        case 0:
          return 'large';
        default:
          return 'medium';
      }
    }
    return {
      getClassByIndex,
      getImageStoreByIndex
    }
  }
}
</script>
