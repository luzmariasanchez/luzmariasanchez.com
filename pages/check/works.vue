<template>
  <div class="w-full container mx-auto">
    <Title :title="page.title" :description="page.description"></Title>
    <div class="grid md:grid-cols-12 gap-5">
      <div class="md:col-span-9">
        <CheckAsync :items="items" :schema="schema" :options="{ relations }" :route="route"></CheckAsync>
        <Pagination :pathName="'check-works'" :currentPage="+currentPagination" :totalPage="+totalPagination">
        </Pagination>
      </div>
      <div class="md:col-span-3 md:pt-0 p-2">
        <CheckMenu current="works"></CheckMenu>
      </div>
    </div>
  </div>
</template>

<script>
import getHead from "@/helpers/head";
import loadItems from "@/api/loadItems";
import schema from "@/schemas/works";
import { extractSlugs } from "@/helpers/extractSlugs";

export default {
  name: "check-works",
  nuxtI18n: {
    paths: {
      en: "/check/works",
      es: "/check/proyectos",
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
        name: 'work-slug',
        param: 'slug'
      }
    }
  },
  watchQuery: ['p'],
  async asyncData(context) {
    const page = {
      title: 'Check Works'
    }
    const { items, page: currentPagination, totalPage: totalPagination } = await loadItems(context, 'works', {
      page: context.query.p ? parseInt(context.query.p, 10) : 1,
      limit: 1000,
      sortField: 'start',
      sortDirection: 'desc',
      condition: {},
      fields: [
        'slug',
        'offline',
        'private',
        'title',
        'description',
        'image',
        'imageLegend',
        'video',
        'start',
        'end',
        'isEvent',
        'isPermanent',
        'info',
        'place',
        'categorys',
        'tags',
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
        'sponsorsLabel',
        'sponsors',
        'guestsLabel',
        'guests',
        'works',
        'pictures',
      ],
    });

    // relations
    const places = await context.$content(context.i18n.locale, 'places').where({ offline: { $ne: true }, }).only(['slug']).fetch();
    const categorys = await context.$content(context.i18n.locale, 'categorys').where({ offline: { $ne: true }, }).only(['slug']).fetch();
    const tags = await context.$content(context.i18n.locale, 'tags').where({ offline: { $ne: true }, }).only(['slug']).fetch();
    const collections = await context.$content(context.i18n.locale, 'collections').where({ offline: { $ne: true }, }).only(['slug']).fetch();
    const commissions = await context.$content(context.i18n.locale, 'commissions').where({ offline: { $ne: true }, }).only(['slug']).fetch();
    const grants = await context.$content(context.i18n.locale, 'grants').where({ offline: { $ne: true }, }).only(['slug']).fetch();
    const prizes = await context.$content(context.i18n.locale, 'prizes').where({ offline: { $ne: true }, }).only(['slug']).fetch();
    const residencys = await context.$content(context.i18n.locale, 'residencys').where({ offline: { $ne: true }, }).only(['slug']).fetch();
    const sponsors = await context.$content(context.i18n.locale, 'sponsors').where({ offline: { $ne: true }, }).only(['slug']).fetch();
    const guests = await context.$content(context.i18n.locale, 'guests').where({ offline: { $ne: true }, }).only(['slug']).fetch();
    const works = await context.$content(context.i18n.locale, 'works').where({ offline: { $ne: true }, }).only(['slug']).fetch();
    const relations = {
      places: extractSlugs(places),
      categorys: extractSlugs(categorys),
      tags: extractSlugs(tags),
      collections: extractSlugs(collections),
      commissions: extractSlugs(commissions),
      grants: extractSlugs(grants),
      prizes: extractSlugs(prizes),
      residencys: extractSlugs(residencys),
      sponsors: extractSlugs(sponsors),
      guests: extractSlugs(guests),
      works: extractSlugs(works),
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
