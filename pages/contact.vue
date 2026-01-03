<template>
  <div class="w-full container mx-auto">
    <Title :title="page.title" :description="page.description"></Title>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <Content :page="page"></Content>
        <div class="text-gray-400">
          <div class="mb-2">
            <i class="icon-mail"></i> {{ page.email }}
          </div>
        </div>
      </div>
      <div>
        <ContactForm :formUrl="formUrl" />
      </div>
    </div>
  </div>
</template>

<script>
import getHead from "@/helpers/head";
import config from '@/config';

export default {
  name: "contact",
  nuxtI18n: {
    paths: {
      en: "/contact",
      es: "/contacto",
    },
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return getHead(this.page, i18nHead);
  },
  async asyncData({ $content, i18n }) {
    const page = await $content(i18n.locale, "pages", "contact").fetch();
    const formUrl = config.contactFormUrl;
    return {
      page,
      formUrl
    };
  },
}
</script>
