<template>
  <NuxtLink :to="localePath({ name: `commission-slug`, params: { slug: commission.slug } })">
    <div class="text-center text-sm text-gray-200">
      {{ commission.title }}
    </div>
  </NuxtLink>
</template>

<script>

export default {
  props: {
    commission: {
      type: Object,
      required: true
    },
  },
}
</script>
