<template>
  <div>
    <Banner v-if="commission.image" :url="commission.image" :alt="commission.title" class="mb-6"></Banner>
    <div class="w-full sm:w-3/5 mx-auto">
      <Dates v-if="commission.start" :start="commission.start" :end="commission.end"></Dates>
      <Address v-if="commission.address" :address="commission.address"></Address>
      <Content :page="commission"></Content>
      <Url v-if="commission.url" :url="commission.url" :label="commission.urlLabel || $t('content.link')"></Url>
      <Section v-if="commission.jury" :content="commission.jury" :title="commission.juryLabel || $t('content.jury')">
      </Section>
      <Collections v-if="commission.collections && commission.collections.length" :collections="commission.collections"
        :label="commission.collectionsLabel"></Collections>
      <Commissions v-if="commission.commissions && commission.commissions.length" :commissions="commission.commissions"
        :label="commission.commissionsLabel"></Commissions>
      <Grants v-if="commission.grants && commission.grants.length" :grants="commission.grants"
        :label="commission.grantsLabel"></Grants>
      <Prizes v-if="commission.prizes && commission.prizes.length" :prizes="commission.prizes"
        :label="commission.prizesLabel"></Prizes>
      <Residencys v-if="commission.residencys && commission.residencys.length" :residencys="commission.residencys"
        :label="commission.residencysLabel"></Residencys>
      <div class="mt-10">
        <Grid v-if="commission.works && commission.works.length" :items="commission.works" size="small"></Grid>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    commission: {
      type: Object,
      required: true,
    },
  },
}
</script>