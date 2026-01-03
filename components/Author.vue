<template>

  <div class="flex w-full flex-col md:flex-row items-center font-sans p-8 md:p-24 border-t border-gray-800 mt-10">
    <img class="w-16 h-16 rounded-full mb-4 md:mr-4 md:mb-0" :src="$imager($t('author.avatar'), 'square')"
      alt="Avatar of Author">
    <div class="flex-1 text-center md:text-left mb-4 md:mb-0">
      <p class="text-gray-200 font-bold text-base md:text-xl leading-none mb-2 md:mb-0">{{ $t('author.title') }}</p>
      <p class="text-gray-600 text-xs md:text-base">{{ $t('author.content') }}</p>
    </div>
    <div class="justify-end">
      <nuxt-link as="button" :to="localePath('bio')"
        class="bg-transparent border border-gray-500 hover:border-white text-xs text-gray-500 hover:text-white font-bold py-2 px-4 rounded-full">
        {{
        $t('author.more')
        }}</nuxt-link>
    </div>
  </div>

</template>

<script>

export default {
  name: "Author",
}
</script>
