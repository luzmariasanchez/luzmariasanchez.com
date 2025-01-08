<template>
  <NuxtLink :to="localePath({ name: `grant-slug`, params: { slug: grant.slug } })">
    <div class="text-center text-sm text-gray-200">
      {{ grant.title }}
    </div>
  </NuxtLink>
</template>

<script>

export default {
  props: {
    grant: {
      type: Object,
      required: true
    },
  },
}
</script>
