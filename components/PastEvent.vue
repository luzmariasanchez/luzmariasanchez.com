<template>
  <nuxt-link :to="localePath({ name: pathName, params: { slug: item.slug } })">
    <span class="text-gray-400 text-sm">{{ startFormated }}<template v-if="showEnd"> - {{ endFormated
    }}</template></span>
    <span class="text-white font-bold">{{ item.title }}</span>
    <span v-if="item.place" class="text-gray-600 italic">{{ item.place.title }}</span>
  </nuxt-link>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: "PastEvent",
  props: {
    item: {
      type: Object,
      required: true
    },
    pathName: {
      type: String,
      required: false,
      default() {
        return 'work-slug';
      }
    }
  },
  computed: {
    startDayjs() {
      if (!this.item.start) return;
      return this.getDateFormated('' + this.item.start)
    },
    startFormated() {
      if (!this.startDayjs) return;
      return this.startDayjs.format(this.dateFormatByLg);
    },
    endDayjs() {
      if (!this.item.end) return;
      return this.getDateFormated('' + this.item.end)
    },
    endFormated() {
      if (!this.endDayjs) return;
      return this.endDayjs.format(this.dateFormatByLg);
    },
    dateFormatByLg() {
      if (this.$i18n.locale === 'en') return 'MMM D';
      else return 'D MMM';
    },
    showEnd() {
      return this.item.end && this.item.end !== this.item.start
    }
  },
  methods: {
    getDateFormated(date) {
      return dayjs(date, this.getDateInputFormat(date))
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
  }
}
</script>
