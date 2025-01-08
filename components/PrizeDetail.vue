<template>
  <div>
    <Banner v-if="prize.image" :url="prize.image" :alt="prize.title" class="mb-6"></Banner>
    <div class="w-full sm:w-3/5 mx-auto">

      <Dates v-if="prize.start" :start="prize.start" :end="prize.end"></Dates>
      <Address v-if="prize.address" :address="prize.address"></Address>
      <div v-if="prize.category" class="text-center text-lg mb-8 text-gray-200">{{ prize.category }}</div>
      <Content :page="prize"></Content>
      <Url v-if="prize.url" :url="prize.url" :label="prize.urlLabel || $t('content.link')"></Url>
      <Collections v-if="prize.collections && prize.collections.length" :collections="prize.collections"
        :label="prize.collectionsLabel"></Collections>
      <Commissions v-if="prize.commissions && prize.commissions.length" :commissions="prize.commissions"
        :label="prize.commissionsLabel"></Commissions>
      <Grants v-if="prize.grants && prize.grants.length" :grants="prize.grants" :label="prize.grantsLabel"></Grants>
      <Prizes v-if="prize.prizes && prize.prizes.length" :prizes="prize.prizes" :label="prize.prizesLabel"></Prizes>
      <Residencys v-if="prize.residencys && prize.residencys.length" :residencys="prize.residencys"
        :label="prize.residencysLabel"></Residencys>
      <div class="mt-10" v-if="prize.works && prize.works.length">
        <Grid :items="prize.works" size="small"></Grid>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prize: {
      type: Object,
      required: true,
    },
  },
}
</script>