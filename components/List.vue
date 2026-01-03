<template>

  <div class="mb-20">
    <Subtitle :title="title"></Subtitle>
    <ul>
      <li v-for="(item, itemIndex) in items" :key="itemIndex">
        <nuxt-link :to="localePath({ name: pathName, params: { slug: item.slug } })" class="block mb-3">
          <div class="text-gray-200">
            {{  item.title  }}
          </div>
          <div v-if="item.description" class="text-gray-400 text-xs italic">
            {{  item.description  }}
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>

</template>

<script>

export default {
  name: "List",
  props: {
    items: {
      type: Array,
      required: true,
    },
    pathName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
  },
}
</script>
