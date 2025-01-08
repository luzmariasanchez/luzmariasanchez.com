<template>
  <div>
    <ul class="lg:hidden">
      <li>
        <button
          class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2 text-xl"
          @click.stop="toggleMenu"><i :class="showMenu ? 'icon-cancel' : 'icon-menu'"></i></button>
      </li>
    </ul>
    <div :class="['lg:flex text-sm', showMenu ? 'opened' : 'hidden']" v-click-outside="closeMenu">
      <ul class="list-reset flex flex-col lg:flex-row lg:flex-1 lg:items-center" @click="closeMenu">
        <li class="mr-2" v-for="(category, categoryIndex) in categorys" :key="categoryIndex">
          <nuxt-link :to="localePath({ name: 'works-c-category', params: { category: category.slug } })"
            class="cursor-pointer inline-block text-gray-600 no-underline lg:hover:text-gray-200 hover:text-black hover:text-underline py-2 px-2">
            {{ category.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "MenuCategorys",
  data() {
    return {
      showMenu: false,
      categorys: []
    }
  },
  methods: {
    async load() {
      this.categorys = await this.$content(this.$i18n.locale, 'categorys')
        .where({ offline: { $ne: true } })
        .sortBy('order', 'asc')
        .sortBy('title', 'asc')
        .only(['title', 'slug'])
        .fetch();
    },
    toggleMenu: function () {
      this.showMenu = !this.showMenu;
    },
    closeMenu: function () {
      this.showMenu = false;
    },
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

<style lang="less" scoped>
.opened {
  position: fixed;
  top: 70px;
  left: 0px;
  width: 100%;
  text-align: center;
  padding: 10px;
  font-size: 1.2em;
  background-color: white;
  z-index: 100;
}

.nuxt-link-active {
  color: white;
}

.opened {
  .nuxt-link-active {
    color: black;
    font-weight: 700;
  }
}
</style>
