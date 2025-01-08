<template>
  <div class="w-full container mx-auto">
    <Title :title="page.title"></Title>
    <div v-if="page.image" class="w-full max-w-xs mx-auto mb-10">
      <img :src="$imager(page.image, 'square')" class="w-full rounded-full">
    </div>
    <div class="w-full sm:w-3/5 mx-auto">
      <Content :page="page"></Content>
    </div>
  </div>
</template>

<script>
import getHead from "@/helpers/head";

export default {
  name: "bio",
  nuxtI18n: {
    paths: {
      en: "/bio",
      es: "/bio",
    },
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return getHead(this.page, i18nHead);
  },
  async asyncData({ $content, i18n }) {
    const page = await $content(i18n.locale, "pages", "bio").fetch();
    return {
      page
    };
  },
}
</script>
