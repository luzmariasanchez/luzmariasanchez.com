<template>
  <div class="w-full relative flex py-5 items-center">
    <div class="flex-grow border-t border-gray-600"></div>
    <span class="flex-shrink mx-4 text-xs font-semibold uppercase text-gray-200">{{  title  }}</span>
    <div class="flex-grow border-t border-gray-600"></div>
  </div>
</template>

<script>

export default {
  name: "Tag",
  props: {
    title: {
      type: String,
      required: true
    },
  },
}
</script>
