<template>
  <div class="w-full container mx-auto">
    <Title :title="page.title" :description="page.description"></Title>
    <div class="grid md:grid-cols-12 gap-5">
      <div class="md:col-span-9">
        <CheckAsync :items="items" :schema="schema" :options="{ relations }" :route="route"></CheckAsync>
        <Pagination :pathName="'check-commissions'" :currentPage="+currentPagination" :totalPage="+totalPagination">
        </Pagination>
      </div>
      <div class="md:col-span-3 md:pt-0 p-2">
        <CheckMenu current="commissions"></CheckMenu>
      </div>
    </div>
  </div>
</template>

<script>
import getHead from "@/helpers/head";
import loadItems from "@/api/loadItems";
import schema from "@/schemas/commissions";
import { extractSlugs } from "@/helpers/extractSlugs";

export default {
  name: "check-commissions",
  nuxtI18n: {
    paths: {
      en: "/check/commissions",
      es: "/check/commissions",
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
        name: 'index',
        param: 'none'
      }
    }
  },
  watchQuery: ['p'],
  async asyncData(context) {
    const page = {
      title: 'Check commissions'
    }
    const { items, page: currentPagination, totalPage: totalPagination } = await loadItems(context, 'commissions', {
      page: context.query.p ? parseInt(context.query.p, 10) : 1,
      limit: 1000,
      condition: {},
      fields: [
        'slug',
        'title',
        'offline',
        'address',
        'jury',
        'start',
        'end',
        'url',
        'image',
        'collections',
        'commissions',
        'grants',
        'prizes',
        'residencys',
        'collectionsLabel',
        'commissionsLabel',
        'grantsLabel',
        'prizesLabel',
        'residencysLabel',
      ],
    });

    // relations
    const collections = await context.$content(context.i18n.locale, 'collections').where({ offline: { $ne: true }, }).only(['slug']).fetch();
    const commissions = await context.$content(context.i18n.locale, 'commissions').where({ offline: { $ne: true }, }).only(['slug']).fetch();
    const grants = await context.$content(context.i18n.locale, 'grants').where({ offline: { $ne: true }, }).only(['slug']).fetch();
    const prizes = await context.$content(context.i18n.locale, 'prizes').where({ offline: { $ne: true }, }).only(['slug']).fetch();
    const residencys = await context.$content(context.i18n.locale, 'residencys').where({ offline: { $ne: true }, }).only(['slug']).fetch();
    const relations = {
      collections: extractSlugs(collections),
      commissions: extractSlugs(commissions),
      grants: extractSlugs(grants),
      prizes: extractSlugs(prizes),
      residencys: extractSlugs(residencys),
    }
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
