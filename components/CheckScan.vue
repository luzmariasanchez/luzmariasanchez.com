<template>
  <nuxt-link :to="localePath({ name: route.name, params: { [route.param]: item.slug } })"
    :class="item.offline ? 'text-gray-500' : 'text-gray-200'">

    <div class="flex flex-row gap-2 w-full border border-gray-700 p-2 hover:border-gray-400">
      <div>
        <i v-if="isChecking" class="icon-spin animate-spin text-gray-200"></i>
        <i v-else :class="hasError ? 'icon-cancel text-red-400' : 'icon-check text-green-400'"></i>
      </div>
      <div>
        <div>
          <div :class="item.offline ? 'text-gray-500' : 'text-gray-200'">
            {{ item.title }}
          </div>
          <div class="text-gray-600 text-sm">
            {{ item.slug }}
          </div>
        </div>
        <ul v-if="hasError" class="text-red-400 text-sm list-disc	ml-4">
          <li v-for="(error, errorIndex) in errors" :key="errorIndex">
            {{ error }}
          </li>
        </ul>
      </div>
    </div>
  </nuxt-link>
</template>

<script>

export default {
  name: "CheckScan",
  props: {
    item: {
      type: Object,
      required: true
    },
    schema: {
      type: Object,
      required: true
    },
    validation: {
      type: Object,
      required: false
    },
    route: {
      type: Object,
      required: true,
    }
  },
  computed: {
    isChecking() {
      return !this.validation;
    },
    hasError() {
      return this.validation && this.validation.$hasError;
    },
    errors() {
      return this.validation && this.validation.$errors;
    },
    countErrors() {
      return this.validation && this.validation.$errors.length;
    },
  },
}
</script>
