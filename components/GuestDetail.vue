<template>
  <div class="p-4">
    <div class="text-left">
      <div class="flex justify-between">
        <div>
          <h3 class="font-bold text-2xl">{{guest.title}}</h3>
          <div v-if="guest.job" class="text-sm text-gray-600">{{ guest.job }}</div>
          <div v-if="guest.from" class="text-xs text-gray-400 italic">{{ guest.from }}</div>
        </div>
        <div v-if="guest.image">
          <img class="w-16 rounded-full" :src="$imager(guest.image, 'square')" :alt="guest.title" />
        </div>
      </div>

      <div class="markdown-content text-gray-800 mt-2">
        <nuxt-content :document="guest" />
      </div>

      <div v-if="guest.url" class="text-center mb-2">
        <a :href="guest.url" target="_blank"
          class="text-blue-500 border border-blue-500 bg-white hover:text-white hover:border-white hover:bg-blue-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none ease-linear transition-all duration-150">
          Open Website
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuestDetail",
  props: {
    guest: {
      type: Object,
      required: false
    },
  },
}
</script>
