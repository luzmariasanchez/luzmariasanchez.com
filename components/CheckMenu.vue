<template>
  <div>
    <CheckLink v-for="(item, itemIndex) in items" :key="itemIndex" :name="item.name" :service="item.service" class="mb-1"
      :active="current === item.service">
    </CheckLink>
  </div>
</template>

<script>

export default {
  props: {
    current: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      items: [
        { name: 'Pages', service: 'pages' },
        { name: 'Categories', service: 'categorys' },
        { name: 'Tags', service: 'tags' },
        { name: 'Works', service: 'works' },
        { name: 'Guests', service: 'guests' },
        { name: 'Places', service: 'places' },
        { name: 'Sponsors', service: 'sponsors' },
        { name: 'Collections', service: 'collections' },
        { name: 'Commissions', service: 'commissions' },
        { name: 'Grants', service: 'grants' },
        { name: 'Prizes', service: 'prizes' },
        { name: 'Residencies', service: 'residencys' },
      ]
    };
  },
  computed: {
    route() {
      return "check-" + this.service;
    },
  },
}
</script>