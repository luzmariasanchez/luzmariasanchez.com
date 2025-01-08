<template>
  <div class="w-full container mx-auto">
    <template v-if="error">
      <Message :text="$t('message.notFound')"></Message>
    </template>
    <template v-else>
      <Title :title="item.title" :description="item.description" :categorys="item.categorys"></Title>
      <WorkDetail :page="item"></WorkDetail>
    </template>
  </div>
</template>

<script>
import getHead from "@/helpers/head";
import loadItem from "@/api/loadItem";

export default {
  name: 'work-slug',
  nuxtI18n: {
    paths: {
      en: "/work/:slug",
      es: "/obra/:slug",
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
      page = await context.$content(context.i18n.locale, 'pages', 'works').fetch();
    } catch (err) {
      error = err;
    }

    const { item, error: itemError } = await loadItem(context, 'works', {
      slug: context.params.slug,
      relations: [
        {
          service: 'places',
          parentField: 'place',
          fields: ['title', 'slug', 'image', 'address', 'url'],
        },
        {
          service: 'categorys',
          fields: ['title', 'slug', 'color'],
          many: true
        },
        {
          service: 'tags',
          fields: ['title', 'slug'],
          many: true
        },
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
        {
          service: 'guests',
          fields: ['title', 'slug', 'image', 'job', 'from', 'body'],
          many: true
        },
        {
          service: 'sponsors',
          fields: ['title', 'slug', 'image', 'url'],
          many: true
        },
        {
          service: 'works',
          fields: ['title', 'slug', 'image', 'description', 'categorys'],
          many: true,
          relations: [
            {
              service: 'categorys',
              fields: ['title', 'slug', 'color'],
              many: true
            },
          ]
        }
      ]
    });

    return {
      page,
      item,
      error: error || itemError
    }
  },
}
</script>
