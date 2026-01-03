<template>
  <div class="mb-20">
    <Subtitle :title="$t('content.place')"></Subtitle>
    <Link :url="place.url">
    <Place :place="place"></Place>
    </Link>
  </div>
</template>

<script>

export default {
  name: "Places",
  props: {
    place: {
      type: Object,
      required: true
    }
  },
}
</script>

