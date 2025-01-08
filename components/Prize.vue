<template>
  <NuxtLink :to="localePath({ name: `prize-slug`, params: { slug: prize.slug } })">
    <div class="text-center text-sm text-gray-200">
      {{ prize.title }}
    </div>
  </NuxtLink>
</template>

<script>

export default {
  props: {
    prize: {
      type: Object,
      required: true
    },
  },
}
</script>
