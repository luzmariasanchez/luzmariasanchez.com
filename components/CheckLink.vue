<template>
  <NuxtLink :to="localePath({ name: route })"
    :class="['border border-gray-400 hover:border-gray-200 hover:text-white px-2 py-4 flex flex-col items-center', active ? 'text-gray-800 bg-gray-200' : 'text-gray-200 bg-none']">
    <div class="text-xl">
      <span v-if="collection">{{ collection.total }}</span> {{ name }}
    </div>
    <div class="sm" v-if="collection">
      <div v-if="collection.private" class="text-gray-500">{{ collection.private }} privates</div>
      <div v-if="collection.offline" class="text-gray-500">{{ collection.offline }} offline</div>
    </div>
  </NuxtLink>
</template>

<script>

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    service: {
      type: String,
      required: true,
    },
    collection: {
      type: Object,
      required: false,
    },
    active: {
      type: Boolean,
      required: false,
    }
  },
  data() {
    return {

    };
  },
  computed: {
    route() {
      return "check-" + this.service;
    },
  },
  mounted: async function () {

  }
}
</script>
