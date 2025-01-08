<template>
  <div class="bg-black">

    <Head />
    <div class="min-h-screen max-w-6xl mx-auto px-3">
      <Nuxt />
    </div>
    <Author />
    <Foot />
  </div>
</template>

<script>
import Head from '@/components/Head.vue'
import Foot from '@/components/Foot.vue'
import Author from '@/components/Author.vue'

export default {
  name: 'Header',
  components: {
    Head, Foot, Author
  }
}
</script>
