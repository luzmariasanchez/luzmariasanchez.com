<template>
  <div class="flex items-center text-sm">
    <ul class="list-reset flex flex-1 items-center">
      <li class="ml-2" v-for="(link, linkIndex) in links" :key="linkIndex">
        <nuxt-link :to="localePath(link.pathKey)" :alt="$t(link.titleKey)"
          class="cursor-pointer inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2">
          <i :class="link.icon"></i>
        </nuxt-link>
      </li>
      <li class="ml-2">
        <LocaleLink></LocaleLink>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "MenuPages",
  data() {
    return {
      links: [
        {
          pathKey: 'search',
          titleKey: 'page.search',
          icon: 'icon-search'
        },
        {
          pathKey: 'upcoming',
          titleKey: 'page.events',
          icon: 'icon-calendar'
        },
        {
          pathKey: 'bio',
          titleKey: 'page.bio',
          icon: 'icon-info'
        },
        {
          pathKey: 'contact',
          titleKey: 'page.contact',
          icon: 'icon-mail'
        },
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.nuxt-link-active {
  color: white;
}
</style>
  