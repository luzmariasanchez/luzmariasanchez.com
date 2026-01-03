<template>
  <div class="text-center w-full text-gray-200 text-sm mb-6">
    {{ formatedStart }}<template v-if="showEnd"> - {{ formatedEnd }}</template>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: "Dates",
  props: {
    start: {
      type: [Number, String],
      required: true
    },
    end: {
      type: [Number, String],
      required: false
    }
  },
  computed: {
    showEnd() {
      if (!this.end) return false;
      if (this.start === this.end) return false;
      return true;
    },
    formatedStart() {
      if (!this.start) return;
      return this.getDateFormated('' + this.start);
    },
    formatedEnd() {
      if (!this.end) return
      return this.getDateFormated('' + this.end);
    },
  },
  methods: {
    getDateFormated(date) {
      return dayjs(date, this.getDateInputFormat(date)).format(this.getDateOutputFormat(date))
    },
    getDateInputFormat(date) {
      if (!date) return
      const splitedDate = date.split("/");
      return {
        1: 'YYYY',
        2: 'YYYY/MM',
        3: 'YYYY/MM/DD',
      }[splitedDate.length];
    },
    getDateOutputFormat(date) {
      if (!date) return
      const splitedDate = date.split("/");
      const lg = this.$i18n.locale;
      return {
        en: {
          1: 'YYYY',
          2: 'MM/YYYY',
          3: 'MM/DD/YYYY',
        },
        es: {
          1: 'YYYY',
          2: 'MM/YYYY',
          3: 'DD/MM/YYYY',
        }
      }[lg][splitedDate.length];
    },
  }
}
</script>
