<template>
  <div class="dropdown dialog absolute top-6 p-3 bg-white z-10 w-60 h-80 overflow-y-auto rounded shadow-lg"
    v-click-outside="onClickOutside">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  methods: {
    onClickOutside() {
      this.$emit('close');
    }
  }
}
</script>
