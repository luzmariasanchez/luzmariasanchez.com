<template>
  <nuxt-link :to="switchLocalePath(nextLocale.code)"
    class="cursor-pointer inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2">
    {{
    ('' + nextLocale.code).toUpperCase() }}</nuxt-link>
</template>

<script>

export default {
  name: "LocaleLink",
  computed: {
    nextLocale() {
      return this.$i18n.locales.find(locale => locale.code !== this.$i18n.locale);
    },
  },
}
</script>

<style lang="less" scoped>
.nuxt-link-active {
  color: rgb(75, 85, 99) !important;

  &:hover {
    color: white !important;
  }
}
</style>
    