<template>
  <div class="w-full container mx-auto">
    <template v-if="error">
      <Message :text="$t('message.notFound')"></Message>
    </template>
    <template v-else>
      <Title :title="page.title" :description="page.description"></Title>
      <Nav>
        <template #left>
          <i class="icon-filter text-gray-300 mr-2"></i>
          <FilterTags></FilterTags>
        </template>
      </Nav>
      <Grid :items="items"></Grid>
      <Pagination :pathName="'works-t-p-page'" :currentPage="+currentPagination" :totalPage="+totalPagination"
        :params="{ tag: page.slug }">
      </Pagination>
    </template>
  </div>
</template>

<script>
import getHead from "@/helpers/head";
import loadItems from "@/api/loadItems";

export default {
  name: "works-t-p-page",
  nuxtI18n: {
    paths: {
      en: "/works/t/:tag/p/:page",
      es: "/proyectos/t/:tag/p/:page",
    },
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return getHead(this.page, i18nHead);
  },
  async asyncData(context) {
    let page, tag, error;
    try {
      page = await context.$content(context.i18n.locale, 'pages', 'works').fetch();
    } catch (err) {
      error = err;
    }
    try {
      tag = await context.$content(context.i18n.locale, 'tags', context.params.tag).fetch();
    } catch (err) {
      error = err;
    }

    const { items, page: currentPagination, totalPage: totalPagination } = await loadItems(context, 'works', {
      page: context.params.page ? parseInt(context.params.page, 10) : 1,
      where: {
        tags: { $contains: context.params.tag }
      },
      limit: 24,
      sortField: 'start',
      sortDirection: 'desc',
      fields: ['slug', 'title', 'description', 'image', 'start', 'categorys'],
      relations: [{
        service: 'categorys',
        fields: ['title', 'slug', 'color'],
        many: true,
      }]
    });
    return {
      error,
      page: {
        ...page,
        description: tag && tag.title
      },
      items,
      currentPagination,
      totalPagination
    };
  },
}
</script>
