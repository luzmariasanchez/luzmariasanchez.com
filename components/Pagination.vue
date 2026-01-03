<template>
  <div class="flex justify-between mt-5">
    <div>
      <nuxt-link v-if="showPrev"
        :to="localePath({ name: pathName, params: { ...params, page: +currentPage - 1 }, query })"
        class="bg-transparent border border-gray-500 hover:border-white text-xs text-gray-500 hover:text-white font-bold py-2 px-4 rounded-full">
        {{ $t('common.prev') }}</nuxt-link>
    </div>
    <div>
      <nuxt-link v-if="showNext"
        :to="localePath({ name: pathName, params: { ...params, page: +currentPage + 1 }, query })"
        class="bg-transparent border border-gray-500 hover:border-white text-xs text-gray-500 hover:text-white font-bold py-2 px-4 rounded-full">
        {{ $t('common.next') }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error",
  props: {
    pathName: {
      type: String,
      required: true,
    },
    params: {
      type: Object,
      required: false,
      default() {
        return {}
      }
    },
    query: {
      type: Object,
      required: false,
      default() {
        return {}
      }
    },
    currentPage: {
      type: Number,
      required: true,
    },
    totalPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    showPrev() {
      return this.currentPage > 1;
    },
    showNext() {
      return this.currentPage < this.totalPage;
    },
  },
}
</script>