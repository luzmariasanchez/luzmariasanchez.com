<template>
  <div>
    <client-only>
      <div class="text-white text-center mb-4">
        <div v-if="isScanning">
          Scanning... {{ currentIndex + 1 }} / {{ items.length }}
        </div>
        <div v-else>
          Scan finished.<br />
          {{ scans.length }} errors detected.
        </div>
      </div>
      <div v-if="items.length" class="flex flex-col gap-1">
        <CheckScan v-if="currentScannedItem" :item="currentScannedItem" :schema="schema" :route="route">
        </CheckScan>
        <CheckScan v-for="(scan, scanIndex) in scans" :key="scanIndex" :item="scan.item" :schema="schema"
          :validation="scan.validation" :route="route">
        </CheckScan>
      </div>
      <template v-else>
        <div>Vide</div>
      </template>
    </client-only>
  </div>
</template>

<script>

import { validate } from '@/validation';

export default {
  name: "CheckItems",
  props: {
    items: {
      type: Array,
      required: true,
    },
    schema: {
      type: Object,
      required: true,
      default() {
        return {}
      }
    },
    options: {
      type: Object,
      required: false,
      default() {
        return {}
      }
    },
    route: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      currentIndex: 0,
      current: null,
      scans: []
    }
  },
  computed: {
    currentScannedItem() {
      return this.items[this.currentIndex];
    },
    isScanning() {
      return this.currentIndex != null;
    },
  },
  methods: {
    async scanOne() {
      if (this.currentIndex < this.items.length) {
        const item = this.items[this.currentIndex];
        const validation = await validate(item, this.schema, this.options);
        if (validation.$hasError) {
          this.scans.push({
            item,
            validation,
          })
        }
        this.currentIndex += 1;
        this.scanOne()
      } else {
        this.currentIndex = null;
      }
    }
  },
  mounted() {
    this.scanOne();
  },
  beforeDestroy() {
    this.currentIndex = 999999999;
  }
}
</script>

<style scoped>
.check-items {
  gap: 0.5em;
  display: flex;
  flex-direction: column;
}
</style>