<template>
  <div>
    <Banner v-if="residency.image" :url="residency.image" :alt="residency.title" class="mb-6"></Banner>
    <div class="w-full sm:w-3/5 mx-auto">
      <Dates v-if="residency.start" :start="residency.start" :end="residency.end"></Dates>
      <Address v-if="residency.address" :address="residency.address"></Address>
      <Content :page="residency"></Content>
      <div v-if="residency.url">
        <Url :url="residency.url" :label="residency.urlLabel || $t('content.link')"></Url>
      </div>
      <Collections v-if="residency.collections && residency.collections.length" :collections="residency.collections"
        :label="residency.collectionsLabel"></Collections>
      <Commissions v-if="residency.commissions && residency.commissions.length" :commissions="residency.commissions"
        :label="residency.commissionsLabel"></Commissions>
      <Grants v-if="residency.grants && residency.grants.length" :grants="residency.grants"
        :label="residency.grantsLabel"></Grants>
      <Prizes v-if="residency.prizes && residency.prizes.length" :prizes="residency.prizes"
        :label="residency.prizesLabel"></Prizes>
      <Residencys v-if="residency.residencys && residency.residencys.length" :residencys="residency.residencys"
        :label="residency.residencysLabel"></Residencys>
      <div class="mt-10">
        <Grid v-if="residency.works && residency.works.length" :items="residency.works" size="small"></Grid>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    residency: {
      type: Object,
      required: true,
    },
  },
}
</script>