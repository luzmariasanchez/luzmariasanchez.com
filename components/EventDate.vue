<template>
  <div class="w-full border border-gray-400 text-white p-2 text-center">

    <div class="text-sm uppercase">
      {{ this.startMonth }}
    </div>
    <div class="text-3xl">
      {{ this.startDate }}
    </div>
    <div class="text-[10px] mt-2 pt-2 border-t border-t-gray-600 uppercase">
      {{ $t('event.to', 0, { date: this.endFormated }) }}
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: "EventDate",
  props: {
    start: {
      type: [Number, String],
      required: true
    },
    end: {
      type: [Number, String],
      required: false
    },
  },
  computed: {
    startDayjs() {
      if (!this.start) return;
      return this.getDateFormated('' + this.start)
    },
    startMonth() {
      if (!this.startDayjs) return;
      return this.startDayjs.format('MMM');
    },
    startDate() {
      if (!this.startDayjs) return;
      return this.startDayjs.format('D');
    },
    endDayjs() {
      if (!this.end) return;
      return this.getDateFormated('' + this.end)
    },
    endFormated() {
      if (!this.endDayjs) return;
      return this.endDayjs.format('MMM D');
    },
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
