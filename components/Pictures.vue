<template>
  <div class="mb-20 text-center">
    <Subtitle :title="$t('content.pictures')"></Subtitle>
    <client-only>
      <masonry :cols="{ default: 4, 1200: 4, 1000: 3, 720: 3, 580: 2, 400: 2 }" :gutter="8">
        <div v-for="(picture, pictureIndex) in galleryImages" :key="pictureIndex"
          @click="onPictureClick(picture, pictureIndex)"
          class="cursor-pointer brightness-100 hover:brightness-125 transition mb-2">
          <Picture :url="picture"></Picture>
        </div>
      </masonry>
      <v-gallery :images="galleryImages" :index="galleryIndex" @close="onGalleryClose" @onslide="onGallerySlide"
        @onslideend="onGallerySlideEnd" :options="galleryOptions"></v-gallery>
      <PictureLegend v-if="currentPicture" :picture="currentPicture"></PictureLegend>
    </client-only>
  </div>
</template>

<script>

export default {
  name: "Pictures",
  props: {
    pictures: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      galleryIndex: null,
    };
  },
  computed: {
    galleryOptions() {
      return {
        hidePageScrollbars: false
      }
    },
    picturesSplited() {
      if (this.pictures)
        return this.pictures.map((picture) => {
          const splited = picture.split('|');
          return {
            url: splited[0],
            legend: splited[1],
            link: splited[2],
          }
        }
        );
      return [];
    },
    galleryImages() {
      return this.picturesSplited.map((picture) => this.$imager(picture.url, 'full'));
    },
    currentPicture() {
      return (this.galleryIndex >= 0) ? this.picturesSplited[this.galleryIndex] : null;
    }
  },
  methods: {
    onPictureClick(item, index) {
      this.galleryIndex = index;
    },
    onGalleryClose(prop) {
      this.galleryIndex = null
    },
    onGallerySlide(prop) {
    },
    onGallerySlideEnd(prop) {
      this.galleryIndex = prop.index
    },
  },
}
</script>
