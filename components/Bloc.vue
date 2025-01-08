<template>
  <nuxt-link :to="localePath({ name: pathName, params: { slug: item.slug } })"
    class="pb-5 brightness-100 hover:brightness-125 transition">
    <div class="rounded-lg overflow-hidden">
      <div class="relative pb-2/3">
        <img class="absolute h-full w-full object-cover hover:scale-110 transition-transform duration-500	ease-out"
          :src="$imager(item.image, imageStore)" :alt="item.title">
      </div>
    </div>
    <div class="pt-4">
      <div class="flex items-center justify-between">
        <Categorys :categorys="item.categorys"></Categorys>
        <Date :date="item.start"></Date>
      </div>
      <h4 :class="['text-white font-semibold mb-1', titleSize]">{{ item.title }}</h4>
      <div class="text-gray-400 text-sm">{{ item.description }}</div>
    </div>
  </nuxt-link>
</template>

<script>

export default {
  name: "Bloc",
  props: {
    item: {
      type: Object,
      required: true
    },
    imageStore: {
      type: String,
      required: false,
      default() {
        return 'medium';
      }
    },
    size: {
      type: String,
      required: false,
      default() {
        return '';
      }
    },
    pathName: {
      type: String,
      required: false,
      default() {
        return 'work-slug';
      }
    }
  },
  computed: {
    titleSize() {
      if (this.size === 'small') return 'text-md';
      return 'text-lg';
    }
  }
}
</script>
