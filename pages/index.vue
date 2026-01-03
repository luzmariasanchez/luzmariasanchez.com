<template>
  <div class="w-full container mx-auto">
    <Title :title="page.title" :description="page.description"></Title>
    <GridHome :items="items"></GridHome>
    <div class="flex w-full items-center justify-center mt-5 p-5">
      <Btn :to="localePath({ name: 'works' })" :label="$t('home.works')">
      </Btn>
    </div>
  </div>
</template>

<script>
import getHead from "@/helpers/head";
import loadItems from "@/api/loadItems";

export default {
  name: "index",
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return getHead(this.page, i18nHead, {
      titleTemplate: "%s",
    });
  },
  async asyncData(context) {
    const page = await context.$content(context.i18n.locale, 'pages', 'index').fetch();
    const { items } = await loadItems(context, 'works', {
      limit: 15,
      sortField: 'start',
      sortDirection: 'desc',
      fields: ['slug', 'title', 'description', 'image', 'start', 'categorys', 'feat'],
      relations: [{
        service: 'categorys',
        fields: ['title', 'slug', 'color'],
        many: true
      }]
    });

    return {
      page,
      items
    };
  },
}
</script>
