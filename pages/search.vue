<template>
  <div class="w-full container mx-auto">
    <template v-if="error">
      <Message :text="$t('message.notFound')"></Message>
    </template>
    <template v-else>
      <Title :title="page.title" :description="page.description"></Title>
      <div class="relative mb-10">
        <form v-on:submit.prevent="handleSubmit">
          <span class="absolute inset-y-0 right-2 flex items-center pl-2">
            <button type="submit" class="p-1 text-white focus:outline-none">
              <i class="icon-search"></i>
            </button>
          </span>
          <input ref="input" type="text" name="search" :placeholder="$t('search.placeholder')" :value="query"
            class="w-full px-4 py-3 border-2 placeholder:text-gray-800 text-white rounded-md outline-none placeholder:text-gray-200 bg-black focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 border-gray-600 focus:border-white ring-0" />
        </form>
      </div>
      <Grid :items="items"></Grid>
    </template>
  </div>
</template>

<script>
import getHead from "@/helpers/head";
import loadItems from "@/api/loadItems";

export default {
  name: "search",
  nuxtI18n: {
    paths: {
      en: "/search",
      es: "/buscar",
    },
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return getHead(this.page, i18nHead);
  },
  data() {
    return {
      items: [],
      currentPagination: 1,
      totalPagination: 1,
      query: ''
    }
  },
  methods: {
    encodeQuery(query) {
      return encodeURIComponent(query);
    },
    handleSubmit() {
      const queryValue = this.encodeQuery(this.$refs.input.value);
      this.$router.push(this.localePath({ name: 'search', query: { q: queryValue } }))
    },
    async search() {

      let query = this.$route.query.q;
      if (query) {
        query = decodeURIComponent(query);
        const context = { $content: this.$content, i18n: this.$i18n }

        const { items: itemsResult, page: currentPaginationResult, totalPage: totalPaginationResult } = await loadItems(context, 'works', {
          page: this.$route.query.p ? parseInt(this.$route.query.p, 10) : 1,
          search: query,
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

        this.items = itemsResult;
        this.currentPagination = currentPaginationResult;
        this.totalPagination = totalPaginationResult;
        this.query = query;

      }

    },
  },
  watch: {
    '$route.query': '$fetch'
  },
  async fetch() {
    this.search();
  },
  async asyncData(context) {
    let page, error;
    try {
      page = await context.$content(context.i18n.locale, 'pages', 'search').fetch();
    } catch (err) {
      error = err;
    }

    return {
      error,
      page,
    };
  },
}

</script>
