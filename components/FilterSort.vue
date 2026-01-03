<template>
  <div class="relative inline-block">
    <button @click.stop="open" class="text-white"><i class="icon-sort text-gray-300 mr-2"></i> {{ $t('common.sort') }}
      {{ currentSort.title }}</button>
    <template v-if="opened">
      <Dropdown @close="close">
        <ul>
          <li v-for="(sort, sortIndex) in sorts" :key="sortIndex">
            <button @click="select(sort)" :class="['block hover:bg-gray-200 p-1', isActive(sort) && 'bg-gray-300']">{{
                sort.title
            }}
            </button>
          </li>
        </ul>
      </Dropdown>
    </template>
  </div>
</template>

<script>

export default {
  name: "FilterSort",
  props: {
    value: {
      type: String,
      required: true
    },
    sorts: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      opened: false
    }
  },
  computed: {
    currentSort() {
      return this.sorts.find(sort => sort.key === this.value)
    }
  },
  methods: {
    open() {
      this.opened = true;
    },
    close() {
      this.opened = false;
    },
    isActive(sort) {
      return sort.key === this.value;
    },
    select(sort) {
      this.$emit('input', sort.key)
      this.close();
    },
  }
}
</script>
