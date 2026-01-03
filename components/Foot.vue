<template>
  <footer class="">
    <div class="border-t border-gray-800">
      <nav
        class="container max-w-6xl mx-auto flex flex-col md:flex-row flex-wrap justify-center items-center px-2 py-8">
        <nuxt-link :to="localePath('collections')"
          class="cursor-pointer inline-block text-gray-600 no-underline lg:hover:text-gray-200 hover:text-black hover:text-underline py-2 px-2">
          {{ $t('content.collections') }}
        </nuxt-link>
        <i class="icon-dot text-gray-600 hidden md:block"></i>
        <nuxt-link :to="localePath('commissions')"
          class="cursor-pointer inline-block text-gray-600 no-underline lg:hover:text-gray-200 hover:text-black hover:text-underline py-2 px-2">
          {{ $t('content.commissions') }}
        </nuxt-link>
        <i class="icon-dot text-gray-600 hidden md:block"></i>
        <nuxt-link :to="localePath('grants')"
          class="cursor-pointer inline-block text-gray-600 no-underline lg:hover:text-gray-200 hover:text-black hover:text-underline py-2 px-2">
          {{ $t('content.grants') }}
        </nuxt-link>
        <i class="icon-dot text-gray-600 hidden md:block"></i>
        <nuxt-link :to="localePath('residencys')"
          class="cursor-pointer inline-block text-gray-600 no-underline lg:hover:text-gray-200 hover:text-black hover:text-underline py-2 px-2">
          {{ $t('content.residencys') }}
        </nuxt-link>
        <i class="icon-dot text-gray-600 hidden md:block"></i>
        <nuxt-link :to="localePath('prizes')"
          class="cursor-pointer inline-block text-gray-600 no-underline lg:hover:text-gray-200 hover:text-black hover:text-underline py-2 px-2">
          {{ $t('content.prizes') }}
        </nuxt-link>
      </nav>
    </div>
    <div class="border-t border-gray-800">
      <div class="container max-w-6xl mx-auto flex items-center px-2 py-8">

        <div class="w-full mx-auto flex flex-wrap items-center">
          <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
            <nuxt-link :to="localePath({ name: 'index' })"
              class="text-gray-200 no-underline hover:text-gray-400 hover:no-underline">
              {{ $t('foot.title') }}
            </nuxt-link>
          </div>
          <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
            <ul class="list-reset flex justify-center flex-1 md:flex-none items-center">
              <li>
                <nuxt-link :to="localePath('contact')"
                  class="inline-block text-gray-200 no-underline hover:text-gray-400 hover:underline py-2 px-3">
                  <i class="icon-mail"></i>
                </nuxt-link>
              </li>
              <li>
                <a :href="$t('foot.social.twitter')" target="_blank"
                  class="inline-block text-gray-200 no-underline hover:text-gray-400 hover:underline py-2 px-3">
                  <i class="icon-twitter"></i>
                </a>
              </li>
              <li>
                <a :href="$t('foot.social.instagram')" target="_blank"
                  class="inline-block text-gray-200 no-underline hover:text-gray-400 hover:underline py-2 px-3"><i
                    class="icon-instagram"></i></a>
              </li>
              <li>
                <a :href="$t('foot.social.youtube')" target="_blank"
                  class="inline-block text-gray-200 no-underline hover:text-gray-400 hover:underline py-2 px-3"><i
                    class="icon-youtube"></i></a>
              </li>
              <li>
                <a :href="$t('foot.social.academia')" target="_blank"
                  class="inline-block text-gray-200 no-underline hover:text-gray-400 hover:underline pt-4 py-2 px-3">
                  <img src="~assets/logos/academia.svg" alt="Academia" class="w-3">
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: "Foot",
  props: {
  },
}
</script>