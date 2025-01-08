<template>
  <nuxt-link :to="localePath({ name: pathName, params: { slug: item.slug } })"
    class="flex flex-col border-l-2 border-l-gray-800 hover:border-l-gray-400 pl-4">
    <h4 class="text-gray-200 hover:text-white font-semibold mb-1 text-3xl mb-2">{{ item.title }}</h4>
    <div v-if="item.place" class="mb-2">
      <i class="icon-location text-white"></i><span class="text-gray-200">{{ item.place.title }} </span><span
        class="text-gray-600">{{
          item.place.address
        }}</span>
    </div>
    <div class="text-gray-400 text-sm">{{ item.description }}</div>
  </nuxt-link>
</template>

<script>

export default {
  name: "Event",
  props: {
    item: {
      type: Object,
      required: true
    },
    pathName: {
      type: String,
      required: false,
      default() {
        return 'work-slug';
      }
    }
  },
}
</script>
