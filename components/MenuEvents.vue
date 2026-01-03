<template>
  <div class="flex items-center text-sm">
    <ul class="list-reset flex flex-1 items-start">
      <li class="ml-2" v-for="(link, linkIndex) in links" :key="linkIndex">
        <nuxt-link :to="localePath(link.pathKey)" :alt="$t(link.titleKey)"
          class="cursor-pointer inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2">
          {{ $t(link.titleKey) }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "MenuEvents",
  data() {
    return {
      links: [
        {
          pathKey: 'upcoming',
          titleKey: 'events.upcoming'
        },
        {
          pathKey: 'current',
          titleKey: 'events.current'
        },
        {
          pathKey: 'past',
          titleKey: 'events.past'
        },
        {
          pathKey: 'permanent',
          titleKey: 'events.permanent'
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
  