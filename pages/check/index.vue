<template>
  <div class="w-full container mx-auto">
    <Title :title="page.title" :description="page.description"></Title>

    <div class="grid grid grid-cols-3 gap-4">
      <div class="flex flex-col gap-4" v-for="(group, groupIndex) in groups" :key="groupIndex">
        <CheckLink v-for="(item, itemIndex) in group" :key="itemIndex" :name="item.name" :service="item.service"
          :collection="collectionsByService[item.service]">
        </CheckLink>
      </div>
    </div>
  </div>
</template>

<script>
import getHead from "@/helpers/head";

export default {
  name: "check",
  nuxtI18n: {
    paths: {
      en: "/check",
      es: "/check",
    },
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return getHead(this.page, i18nHead, {}, true);
  },
  data() {
    return {
      page: {
        title: 'Check'
      },
      groups: [
        [
          { name: 'Pages', service: 'pages' },
          { name: 'Categories', service: 'categorys' },
          { name: 'Tags', service: 'tags' },
        ],
        [
          { name: 'Works', service: 'works' },
          { name: 'Guests', service: 'guests' },
          { name: 'Places', service: 'places' },
          { name: 'Sponsors', service: 'sponsors' },
        ],
        [
          { name: 'Collections', service: 'collections' },
          { name: 'Commissions', service: 'commissions' },
          { name: 'Grants', service: 'grants' },
          { name: 'Prizes', service: 'prizes' },
          { name: 'Residencies', service: 'residencys' },
        ],
      ]
    }
  },
  async asyncData(context) {

    async function getInfo(service) {
      const items = await context.$content(context.i18n.locale, service)
        .only(['slug', 'private', 'offline'])
        .fetch();
      return {
        service,
        total: items.length,
        private: items.filter(item => item.private).length,
        offline: items.filter(item => item.offline).length
      }
    }

    const collectionServices = [
      'pages',
      'categorys',
      'tags',
      'works',
      'guests',
      'places',
      'sponsors',
      'collections',
      'commissions',
      'grants',
      'prizes',
      'residencys',
    ]

    const collections = await Promise.all(
      collectionServices.map(service => {
        return getInfo(service)
      })
    )

    const collectionsByService = collections.reduce((obj, collection) => {
      return {
        ...obj,
        [collection.service]: collection
      }
    }, {})

    return {
      collectionsByService
    };
  },
}
</script>
