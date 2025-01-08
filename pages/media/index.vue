<template>
  <div class="w-full container mx-auto">
    <Title :title="page.title"></Title>
    <div class="text-white">
      <ul class="w-full text-center">
        <li v-for="(album, albumIndex) in albums" :key="albumIndex">
          <nuxt-link :to="localePath({ name: `media-album`, params: { album: album.slug } })"
            class="w-1/2 mx-auto block border-2 border-gray-200 p-2 mb-5 hover:bg-gray-800">
            <div class="text-white">{{ album.title }}</div>
            <div v-if="album.description" class="text-gray-500 text-xs">{{ album.description }}</div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import getHead from "@/helpers/head";
import albums from "@/constants/albums";

export default {
  name: "media",
  nuxtI18n: {
    paths: {
      en: "/media",
      es: "/media",
    },
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return getHead(this.page, i18nHead, {}, true);
  },
  async asyncData({ $content, i18n }) {
    const page = await $content(i18n.locale, "pages", "media").fetch();
    return {
      page,
      albums
    };
  },
}
</script>
