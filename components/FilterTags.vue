<template>
  <div class="relative inline-block">
    <button @click.stop="open" class="text-white">{{ $t('common.tags') }}</button>
    <template v-if="opened">
      <Dropdown @close="close">
        <ul>
          <li v-for="(tag, tagIndex) in tags" :key="tagIndex">
            <nuxt-link :to="localePath({ name: 'works-t-tag', params: { tag: tag.slug } })"
              :class="['block hover:bg-gray-200 p-1', isActive(tag) && 'bg-gray-300']">{{
              tag.title
              }}
            </nuxt-link>
          </li>
        </ul>
      </Dropdown>
    </template>
  </div>
</template>

<script>

export default {
  name: "FilterTags",
  data() {
    return {
      opened: false,
      tags: []
    }
  },
  methods: {
    async load() {
      this.tags = await this.$content(this.$i18n.locale, 'tags')
        .where({ offline: { $ne: true }, })
        .sortBy('title', 'asc')
        .only(['title', 'slug'])
        .fetch();
    },
    open() {
      this.opened = true;
    },
    close() {
      this.opened = false;
    },
    isActive(tag) {
      return tag.slug === this.$route.params.tag;
    }
  },
  watch: {
    '$i18n.locale'() {
      this.load();
    }
  },
  async fetch() {
    this.load();
  }
}
</script>
