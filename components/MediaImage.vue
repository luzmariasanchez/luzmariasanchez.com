<template>
  <div class="p-4">

    <div class="relative flex-auto">
      <img :src="file.src" :alt="file.key" class="w-full" />
      <div class="flex justify-between text-xs text-gray-400">
        <div>{{ file.size }}</div>
        <div>{{ file.date }}</div>
      </div>
    </div>
    <div class="border-t border-solid border-slate-200 rounded-b text-center">
      <div v-if="askForRemove">
        <div v-if="removing">
          <i class="icon-spin animate-spin"></i> Removing...
        </div>
        <div v-else-if="removed">
          <div class="text-sm">File have been removed!</div>
        </div>
        <div v-else-if="removedError">
          <div class="text-sm">An error occured removing the file.</div>
        </div>
        <div v-else>
          <div class="text-sm mb-3">Are you sure you want remove this file?</div>
          <div class="flex justify-between">
            <button @click="cancelRemove"
              class="text-gray-500 border border-gray-500 bg-white hover:text-white hover:border-white hover:bg-blue-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
              type="button">
              Cancel
            </button>
            <button @click="confirmRemove"
              class="text-red-500 border border-red-500 bg-white hover:text-white hover:border-white hover:bg-red-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
              type="button">
              Yes, Remove !
            </button>
          </div>
        </div>

      </div>

      <div v-else>
        <div class="text-sm mb-3 truncate">{{ file.src }}</div>
        <div class="flex justify-center">
          <!-- <button @click="remove"
              class="text-red-500 border border-red-500 bg-white hover:text-white hover:border-white hover:bg-red-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
              type="button">
              Remove File
            </button> -->
          <button @click="copy"
            class="text-blue-500 border border-blue-500 bg-white hover:text-white hover:border-white hover:bg-blue-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
            type="button">
            Copy URL
          </button>
        </div>
        <div v-if="copied" class="text-xs mt-2">URL copied to clipboard</div>
      </div>
    </div>
  </div>
</template>

<script>
import aws from "@/services/aws";
export default {
  name: "MediaImage",
  props: {
    file: {
      type: Object,
      required: false
    },
  },
  data() {
    return {
      copied: false,
      askForRemove: false,
      removing: false,
      removed: false,
      removedError: false
    }
  },
  methods: {
    copy() {
      navigator.clipboard.writeText(this.file.src).then(() => {
        this.copied = true;
        this.hideCopiedMessage()
      });
    },
    hideCopiedMessage() {
      setTimeout(() => {
        this.copied = false;
      }, 1000)
    },
    remove() {
      this.askForRemove = true;
    },
    cancelRemove() {
      this.askForRemove = false;
    },
    async confirmRemove() {
      this.removing = true;
      const removeResult = await aws.removeFile(this.file.key);
      if (removeResult) {
        this.removing = false;
        this.removed = true;
      } else {
        this.removing = false;
        this.removedError = true;
      }
    },
  }
}
</script>
