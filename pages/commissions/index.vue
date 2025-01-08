<template>
  <div class="w-full container mx-auto">
    <template v-if="error">
      <Message :text="$t('message.notFound')"></Message>
    </template>
    <template v-else>
      <Title :title="page.title" :description="page.description"></Title>
      <Grid :items="items" pathName="commission-slug"></Grid>
      <Pagination :pathName="'commissions-p-page'" :currentPage="+currentPagination" :totalPage="+totalPagination">
      </Pagination>
    </template>
  </div>
</template>

<script>
import getHead from "@/helpers/head";
import loadItems from "@/api/loadItems";

export default {
  name: "commissions",
  nuxtI18n: {
    paths: {
      en: "/commissions",
      es: "/comisiones",
    },
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return getHead(this.page, i18nHead);
  },
  async asyncData(context) {
    let page, error;
    try {
      page = await context.$content(context.i18n.locale, 'pages', 'commissions').fetch();
    } catch (err) {
      error = err;
    }
    const { items, page: currentPagination, totalPage: totalPagination } = await loadItems(context, 'commissions', {
      page: context.params.page ? parseInt(context.params.page, 10) : 1,
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
