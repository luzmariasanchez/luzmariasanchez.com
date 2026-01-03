<template>
  <div>
    <Banner v-if="collection.image" :url="collection.image" :alt="collection.title" class="mb-6"></Banner>
    <div class="w-full sm:w-3/5 mx-auto">
      <Dates v-if="collection.start" :start="collection.start" :end="collection.end"></Dates>
      <Address v-if="collection.address" :address="collection.address"></Address>
      <Content :page="collection"></Content>
      <div v-if="collection.url">
        <Url :url="collection.url" :label="collection.urlLabel || $t('content.link')"></Url>
      </div>
      <Collections v-if="collection.collections && collection.collections.length" :collections="collection.collections"
        :label="collection.collectionsLabel"></Collections>
      <Commissions v-if="collection.commissions && collection.commissions.length" :commissions="collection.commissions"
        :label="collection.commissionsLabel"></Commissions>
      <Grants v-if="collection.grants && collection.grants.length" :grants="collection.grants"
        :label="collection.grantsLabel"></Grants>
      <Prizes v-if="collection.prizes && collection.prizes.length" :prizes="collection.prizes"
        :label="collection.prizesLabel"></Prizes>
      <Residencys v-if="collection.residencys && collection.residencys.length" :residencys="collection.residencys"
        :label="collection.residencysLabel"></Residencys>
      <div class="mt-10">
        <Grid v-if="collection.works && collection.works.length" :items="collection.works" size="small"></Grid>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    collection: {
      type: Object,
      required: true,
    },
  },
}
</script>