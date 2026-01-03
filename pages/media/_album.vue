<template>
  <div class="relative w-full container mx-auto">
    <Title :title="album.title" :description="album.description"></Title>
    <div class="absolute top-0 left-0">
      <nuxt-link :to="localePath({ name: `media` })" class="text-gray-400 hover:text-white">
        <i class="icon-left"></i>
      </nuxt-link>
    </div>
    <template v-if="loading">
      <div class="text-center text-white">
        <i class="icon-spin animate-spin"></i>
      </div>
    </template>
    <template v-else>
      <template v-if="files.length">
        <Nav>
          <template #left>
            <FilterSort :sorts="sorts" v-model="sortBy"></FilterSort>
          </template>
          <template #right>
            <button @click.stop="openUpload"
              class="text-blue-500 border border-white bg-white hover:text-white hover:bg-blue-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none ease-linear transition-all duration-150">Upload
              File</button>
          </template>
        </Nav>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mb-10">
          <div v-for="(file, fileIndex) in currentFiles" :key="fileIndex" @click.stop="openFile(file)"
            class="cursor-pointer brightness-100 hover:brightness-125 transition">
            <div class="w-full border-2 border-gray-100">
              <img :src="imager(file.src, 'thumb')" :alt="file.key" class="w-full" loading="lazy" />
            </div>
            <div class="flex justify-between text-xs text-gray-400 mt-1">
              <div>{{ file.size }}</div>
              <div>{{ file.date }}</div>
            </div>
          </div>
        </div>
        <div v-if="showMore" class="text-center mb-5">
          <button @click="loadMore"
            class="text-blue-500 border border-white bg-white hover:text-white hover:bg-blue-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none ease-linear transition-all duration-150">Load
            More</button>
        </div>
      </template>
      <template v-else>
        <Message :text="'This album is empty'"></Message>
        <div class="text-center">
          <button @click.stop="openUpload"
            class="text-blue-500 border border-white bg-white hover:text-white hover:bg-blue-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none ease-linear transition-all duration-150 mt-5">Upload
            File</button>
        </div>
      </template>
    </template>
    <Modal v-model="modalOpened">
      <MediaImage :file="currentFile"></MediaImage>
    </Modal>
    <Modal v-model="uploadOpened">
      <MediaUpload :album="album" @fileUploaded="onFileUploaded"></MediaUpload>
    </Modal>
  </div>
</template>

<script>
import { sortBy } from 'lodash';
import getHead from "@/helpers/head";
import { formatBytes } from "@erniamor/formater";
import aws from "@/services/aws";
import albums from "@/constants/albums";
import config from '@/config';
import imager from '~/helpers/imager';

export default {
  name: "media-album",
  nuxtI18n: {
    paths: {
      en: "/media/:album",
      es: "/media/:album",
    },
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return getHead(this.album, i18nHead, {}, true);
  },
  data() {
    return {
      files: [],
      page: 1,
      itemsByPage: 24,
      currentFile: null,
      modalOpened: false,
      uploadOpened: false,
      loading: true,
      sortBy: 'date-desc',
      sorts: [
        {
          title: 'Date (ASC)',
          key: 'date-asc',
          field: 'LastModified',
          reverse: false
        },
        {
          title: 'Date (DESC)',
          key: 'date-desc',
          field: 'LastModified',
          reverse: true
        },
        {
          title: 'Name (ASC)',
          key: 'name-asc',
          field: 'Key',
          reverse: false
        },
        {
          title: 'Name (DESC)',
          key: 'name-desc',
          field: 'Key',
          reverse: true
        },
        {
          title: 'Size (ASC)',
          key: 'size-asc',
          field: 'Size',
          reverse: false
        },
        {
          title: 'Size (DESC)',
          key: 'size-desc',
          field: 'Size',
          reverse: true
        },
      ]
    }
  },
  computed: {
    bucketUrl() {
      return config.aws.bucketUrl;
    },
    album() {
      const albumSlug = this.$route.params.album;
      return albums.find(a => a.slug === albumSlug);
    },
    currentFiles() {
      const sort = this.sorts.find(sort => sort.key === this.sortBy);
      const sortedFiles = sortBy(this.files || [], sort.field);
      const reversedFiles = (sort.reverse) ? sortedFiles.reverse() : sortedFiles;
      const slicedFiles = reversedFiles.slice(0, this.page * this.itemsByPage);
      const mappedFiles = slicedFiles.map(file => ({
        src: this.bucketUrl + file.Key,
        key: file.Key,
        date: this.$dayjs(file.LastModified).format('YYYY/MM/DD HH:mm'),
        size: formatBytes(file.Size, 2)
      }))
      return mappedFiles;
    },
    showMore() {
      return this.currentFiles.length < this.files.length;
    },
  },
  methods: {
    imager,
    openFile(file) {
      this.currentFile = file;
      this.modalOpened = true;
      this.uploadOpened = false;
    },
    openUpload() {
      this.modalOpened = false;
      this.uploadOpened = true;
    },
    async loadFiles() {
      this.loading = true;
      const files = await aws.viewAlbum(this.album.key);
      this.files = files || [];
      this.loading = false;
    },
    loadMore() {
      this.page = this.page + 1;
    },
    onFileUploaded() {
      this.uploadOpened = false;
      this.loadFiles();
    }
  },
  created() {
    this.loadFiles();
  },
}
</script>
