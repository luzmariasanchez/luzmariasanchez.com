<template>
  <div>

    <div v-if="itemsByYears && itemsByYears.length" class="flex flex-col gap-16">

      <div v-for="(itemsByYear, itemsByYearIndex) in itemsByYears" :key="itemsByYearIndex" class="text-white">
        <div class="text-xl uppercase text-gray-400 font-bold">{{ itemsByYear.year }}</div>
        <div class="ml-6 flex flex-col gap-2">
          <PastEvent v-for="(item, itemIndex) in itemsByYear.items" :key="itemIndex" :item="item" :pathName="pathName">
          </PastEvent>
        </div>
      </div>

    </div>
    <template v-else>
      <Message :text="$t('message.empty')"></Message>
    </template>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import { sortBy, reverse } from 'lodash';


export default {
  name: "PastEvents",
  props: {
    items: {
      type: Array,
      required: true,
    },
    pathName: {
      type: String,
      required: false,
    }
  },
  computed: {
    itemsByYears() {
      const years = this.items.reduce((currentYears, item) => {
        const itemYear = this.getYear(item.start)
        if (itemYear) {
          if (!currentYears[itemYear]) currentYears[itemYear] = [];
          currentYears[itemYear].push(item)
        }
        return currentYears;
      }, {});

      return reverse(sortBy(Object.keys(years).map(year => {
        return {
          year,
          items: reverse(sortBy(years[year], 'start'))
        }
      }), 'year'))
    }
  },
  methods: {
    getYear(date) {
      if (!date) return;
      const dayjsDate = this.getDate('' + date);
      return dayjsDate.format('YYYY');
    },
    getDate(date) {
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
