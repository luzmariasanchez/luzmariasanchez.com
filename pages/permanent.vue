<template>
  <div class="w-full container mx-auto">
    <template v-if="error">
      <Message :text="$t('message.notFound')"></Message>
    </template>
    <template v-else>
      <Title :title="page.title" :description="page.description"></Title>
      <Nav>
        <template #left>
          <i class="icon-calendar text-gray-300 mr-2"></i>
          <MenuEvents></MenuEvents>
        </template>
      </Nav>
      <PermanentEvents :items="items"></PermanentEvents>
      <Pagination :pathName="'permanent'" :currentPage="+currentPagination" :totalPage="+totalPagination"></Pagination>
    </template>
  </div>
</template>

<script>
import getHead from "@/helpers/head";
import loadItems from "@/api/loadItems";
import dayjs from 'dayjs'
export default {
  name: "permanent",
  nuxtI18n: {
    paths: {
      en: "/permanent-events",
      es: "/actividades-permanentes",
    },
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return getHead(this.page, i18nHead);
  },
  watchQuery: ['p'],
  async asyncData(context) {
    let page, error;
    try {
      page = await context.$content(context.i18n.locale, 'pages', 'permanent').fetch();
    } catch (err) {
      error = err;
    }
    const currentDate = dayjs().format('YYYY/MM/DD')
    const { items, page: currentPagination, totalPage: totalPagination } = await loadItems(context, 'works', {
      where: {
        isPermanent: true,
      },
      page: context.query.p ? parseInt(context.query.p, 10) : 1,
      limit: 24,
      sortField: 'start',
      sortDirection: 'desc',
      fields: ['slug', 'title', 'description', 'image', 'start', 'end', 'categorys', 'place'],
      relations: [{
        service: 'places',
        parentField: 'place',
        fields: ['title', 'slug', 'address'],
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
