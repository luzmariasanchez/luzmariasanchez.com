<template>
  <div class="w-full container mx-auto">
    <Title :title="page.title" :description="page.description"></Title>
    <div class="grid md:grid-cols-12 gap-5">
      <div class="md:col-span-9">
        <CheckAsync :items="items" :schema="schema" :options="{ relations }" :route="route"></CheckAsync>
        <Pagination :pathName="'check-tags'" :currentPage="+currentPagination" :totalPage="+totalPagination">
        </Pagination>
      </div>
      <div class="md:col-span-3 md:pt-0 p-2">
        <CheckMenu current="tags"></CheckMenu>
      </div>
    </div>
  </div>
</template>

<script>
import getHead from "@/helpers/head";
import loadItems from "@/api/loadItems";
import schema from "@/schemas/tags";

export default {
  name: "check-tags",
  nuxtI18n: {
    paths: {
      en: "/check/tags",
      es: "/check/lugares",
    },
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return getHead(this.page, i18nHead, {}, true);
  },
  data() {
    return {
      schema,
      route: {
        name: 'works-t-tag',
        param: 'tag'
      }
    }
  },
  watchQuery: ['p'],
  async asyncData(context) {
    const page = {
      title: 'Check tags'
    }
    const { items, page: currentPagination, totalPage: totalPagination } = await loadItems(context, 'tags', {
      page: context.query.p ? parseInt(context.query.p, 10) : 1,
      limit: 1000,
      condition: {},
      fields: [
        'slug',
        'title',
        'offline',
      ],
    });

    // relations
    const relations = {}
    return {
      page,
      items,
      relations,
      currentPagination,
      totalPagination,
    };
  },
}
</script>
