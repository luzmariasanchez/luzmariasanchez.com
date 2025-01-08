<template>
  <div class="w-full container mx-auto">
    <template v-if="error">
      <Message :text="$t('message.notFound')"></Message>
    </template>
    <template v-else>
      <Title :title="item.title" :description="item.type" :categorys="item.categorys"></Title>
      <div v-if="item.institution" class="text-center mb-8 text-gray-200">{{ item.institution }}</div>
      <GrantDetail :grant="item"></GrantDetail>
    </template>
  </div>
</template>

<script>
import getHead from "@/helpers/head";
import loadItem from "@/api/loadItem";
import loadItems from "@/api/loadItems";

export default {
  name: 'grant-slug',
  nuxtI18n: {
    paths: {
      en: "/grant/:slug",
      es: "/beca/:slug",
    },
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return getHead({
      ...this.page,
      title: `${this.item ? this.item.title : 'Not found'} - ${this.page.title}`
    }, i18nHead);
  },
  async asyncData(context) {

    let page, error;
    try {
      page = await context.$content(context.i18n.locale, 'pages', 'grants').fetch();
    } catch (err) {
      error = err;
    }

    const { item, error: itemError } = await loadItem(context, 'grants', {
      slug: context.params.slug,
      relations: [
        {
          service: 'collections',
          fields: ['title', 'slug'],
          many: true
        },
        {
          service: 'commissions',
          fields: ['title', 'slug'],
          many: true
        },
        {
          service: 'grants',
          fields: ['title', 'slug'],
          many: true
        },
        {
          service: 'prizes',
          fields: ['title', 'slug'],
          many: true
        },
        {
          service: 'residencys',
          fields: ['title', 'slug'],
          many: true
        },
      ]
    });

    if (item) {
      const { items: works } = await loadItems(context, 'works', {
        page: 1,
        limit: 1000,
        sortField: 'start',
        sortDirection: 'desc',
        fields: ['slug', 'title', 'description', 'image', 'start', 'end', 'address', 'jury', 'url', 'urlLabel'],
        where: {
          grants: { $contains: item.slug }
        },
        relations: [{
          service: 'categorys',
          fields: ['title', 'slug', 'color'],
          many: true,
        }]
      });

      item.works = works;
    }

    return {
      page,
      item,
      error: error || itemError
    }
  },
}
</script>
