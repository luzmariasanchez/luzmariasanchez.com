<template>
  <div class="mb-20">
    <div class="border border-gray-600">
      <template v-if="type === 'youtube'">
        <PlayerYoutube :id="id"></PlayerYoutube>
      </template>
      <template v-if="type === 'vimeo'">
        <PlayerVimeo :id="id"></PlayerVimeo>
      </template>
    </div>
  </div>
</template>

<script>

import { isYoutubeUrl, getYoutubeId, isVimeoUrl, getVimeoId } from '~/helpers/utils/url';

export default {
  name: "Video",
  props: {
    url: {
      type: String,
      required: true
    }
  },
  setup(props) {
    let type, id;
    if (isYoutubeUrl(props.url)) {
      type = 'youtube';
      id = getYoutubeId(props.url)
    }
    else if (isVimeoUrl(props.url)) {
      type = 'vimeo';
      id = getVimeoId(props.url)
    }
    return {
      type, id
    }
  }
}
</script>
