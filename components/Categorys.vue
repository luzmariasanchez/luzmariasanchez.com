<template>
  <div class="mb-1">
    <template v-if="categorys">
      <div v-for="(category, categoryIndex) in categorys" :key="categoryIndex"
        class="inline-block mr-2 text-xs uppercase" :style="{ color: category.color }">{{
  category.title
        }}</div>
    </template>
  </div>
</template>

<script>

export default {
  name: "Categorys",
  props: {
    categorys: {
      type: Array,
      required: false
    },
  },
}
</script>
