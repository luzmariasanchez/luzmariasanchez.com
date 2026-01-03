<template>
  <NuxtLink :to="localePath({ name: `residency-slug`, params: { slug: residency.slug } })">
    <div class="text-center text-sm text-gray-200">
      {{ residency.title }}
    </div>
  </NuxtLink>
</template>

<script>

export default {
  props: {
    residency: {
      type: Object,
      required: true
    },
  },
}
</script>
