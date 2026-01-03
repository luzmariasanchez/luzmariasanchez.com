<template>
  <div class="fixed bottom-0 left-0 right-0 bg-black opacity-80 z-[1000000]">
    <div v-if="picture.legend" class="p-2 text-gray-200 text-center">
      {{ picture.legend }}
      <div v-if="picture.link" class="text-sm">
        <u><a :href="picture.link" target="_blank">{{ $t('content.picture-link') }}</a></u>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    picture: {
      type: Object,
      required: false
    },
  },
}
</script>
