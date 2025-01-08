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
      <div>allo</div>
      <Pagination :pathName="'works-p-page'" :currentPage="+currentPagination" :totalPage="+totalPagination">
      </Pagination>
    </template>
  </div>
</template>

<script>
import getHead from "@/helpers/head";
import loadItems from "@/api/loadItems";

export default {
  name: "works",
  nuxtI18n: {
    paths: {
      en: "/works",
      es: "/proyectos",
    },
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return getHead(this.page, i18nHead);
  },
  async asyncData(context) {
    let page, error;
    try {
      page = await context.$content(context.i18n.locale, 'pages', 'works').fetch();
    } catch (err) {
      error = err;
    }
    const { items, page: currentPagination, totalPage: totalPagination } = await loadItems(context, 'works', {
      page: 1,
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
      page,
      error,
      items,
      currentPagination,
      totalPagination
    };
  },
}
</script>
