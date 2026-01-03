<template>
  <div>
    <template v-if="url">
      <a :href="url" :target="target"
        :class="['cursor-pointer brightness-100 hover:brightness-125 transition', hasClass]">
        <slot></slot>
      </a>
    </template>
    <template v-else>
      <div :class="hasClass">
        <slot></slot>
      </div>
    </template>
  </div>
</template>

<script>

export default {
  name: "Link",
  props: {
    url: {
      type: String,
      required: false
    },
    target: {
      type: String,
      required: false,
      default() {
        return '_blank';
      }
    },
    hasClass: {
      type: String,
      required: false,
      default() {
        return '';
      }
    },
  },
}
</script>
