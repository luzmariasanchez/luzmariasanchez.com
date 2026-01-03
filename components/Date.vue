<template>
  <div class="text-gray-600 text-xs italic">
    {{ formatedDate }}
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: "Date",
  props: {
    date: {
      type: [Number, String],
      required: false
    },
  },
  computed: {
    formatedDate() {
      if (!this.date) return;
      return this.getDateFormated('' + this.date);
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
