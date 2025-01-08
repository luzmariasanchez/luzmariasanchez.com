<template>
  <div class="p-4">
    <template v-if="uploaded">
      <div class="text-center">
        File uploaded.<br />
        Please wait during image resize process.
      </div>
    </template>
    <template v-else>
      <div class="w-full border-b border-solid border-slate-200 rounded-t">
        <h3 class="w-full uppercase text-center font-extrabold text-xl">
          Upload File
        </h3>
      </div>

      <div class="relative flex-auto">
        <Dropzone @onFiles="onFilesChange" :accept="'image/jpg,image/png'"></Dropzone>
      </div>

      <div class="border-t border-solid border-slate-200 rounded-b">
        <div class="text-center">
          <template v-if="uploading">
            <i class="icon-spin animate-spin"></i>
          </template>
          <template v-if="uploadError">
            An error occured during file upload
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import aws from "@/services/aws";
export default {
  name: "MediaUpload",
  props: {
    album: {
      type: Object,
      requiblue: true
    },
  },
  data() {
    return {
      uploading: false,
      uploaded: false,
      uploadError: false
    };
  },
  methods: {
    onFilesChange(files) {
      if (files && files.length) {
        this.upload(files[0]);
      }
    },
    async upload(file) {
      this.uploading = true;
      const uploadResult = await aws.addFile(this.album.key, file);
      if (uploadResult) {
        this.uploaded = true;
        setTimeout(() => {
          this.$emit('fileUploaded');
        }, 10000)
      } else {
        this.uploadError = true;
      }
      this.uploading = false;
    }
  }
}
</script>
