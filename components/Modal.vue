<template>
  <div>
    <template v-if="value">
      <div class="fixed top-0 left-0 w-full h-full bg-black opacity-80 z-[50]"></div>
      <button @click="closeModal" class="fixed top-5 right-5 text-3xl text-white z-[52] cursor-pointer"><i
          class="icon-cancel"></i></button>
      <div
        class="block modal fade fixed top-0 left-0 z-[51] w-full h-full outline-none overflow-x-hidden overflow-y-auto show"
        id="exampleModalLong" tabindex="-1" aria-modal="true" role="dialog">
        <div class="modal-dialog relative w-auto pointer-events-none" v-click-outside="closeModal">
          <div
            class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">

            <slot></slot>

            <!-- <div
              class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLongLabel">
                Modal title
              </h5>
              <button type="button"
                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body relative p-4" style="min-height: 1500px">This is some placeholder content to show the
              scrolling behavior for modals. Instead of repeating the text the modal, we use an inline style set a
              minimum
              height, thereby extending the length of the overall modal and demonstrating the overflow scrolling. When
              content becomes longer than the height of the viewport, scrolling will move the modal as needed.</div>
            <div
              class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button type="button"
                class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-dismiss="modal">
                Close
              </button>
              <button type="button"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                Save changes
              </button>
            </div> -->
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ['value'],
  methods: {
    closeModal() {
      this.$emit('input', false)
    },
    escapeEvent(evt) {
      if (evt.key === 'Escape') {
        this.closeModal()
      }
    }
  },
  mounted() {
    document.addEventListener('keydown', this.escapeEvent);
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.escapeEvent);
  }
}
</script>

<style scoped>
.modal {}

.modal-dialog {
  margin: 0.5rem;
}

.modal.fade .modal-dialog {
  transition: transform 0.3s ease-out;
  transform: translate(0, -50px);
}

@media (prefers-reduced-motion: reduce) {
  .modal.fade .modal-dialog {
    transition: none;
  }
}

.modal.show .modal-dialog {
  transform: none;
}

.modal.modal-static .modal-dialog {
  transform: scale(1.02);
}

.modal-dialog-scrollable {
  height: calc(100% - 1rem);
}

.modal-dialog-scrollable .modal-content {
  max-height: 100%;
  overflow: hidden;
}

.modal-dialog-scrollable .modal-body {
  overflow-y: auto;
}

.modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100% - 1rem);
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}

.modal-backdrop.fade {
  opacity: 0;
}

.modal-backdrop.show {
  opacity: 0.5;
}

.modal-header .btn-close {
  padding: 0.5rem 0.5rem;
  margin: -0.5rem -0.5rem -0.5rem auto;
}

.modal-body {
  flex: 1 1 auto;
}

@media (min-width: 576px) {
  .modal-dialog {
    max-width: 500px;
    margin: 1.75rem auto;
  }

  .modal-dialog-scrollable {
    height: calc(100% - 3.5rem);
  }

  .modal-dialog-centered {
    min-height: calc(100% - 3.5rem);
  }

  .modal-sm {
    max-width: 300px;
  }
}

@media (min-width: 992px) {

  .modal-lg,
  .modal-xl {
    max-width: 800px;
  }
}

@media (min-width: 1200px) {
  .modal-xl {
    max-width: 1140px;
  }
}

.modal-fullscreen {
  width: 100vw;
  max-width: none;
  height: 100%;
  margin: 0;
}

.modal-fullscreen .modal-content {
  height: 100%;
  border: 0;
  border-radius: 0;
}

.modal-fullscreen .modal-header {
  border-radius: 0;
}

.modal-fullscreen .modal-body {
  overflow-y: auto;
}

.modal-fullscreen .modal-footer {
  border-radius: 0;
}

@media (max-width: 575.98px) {
  .modal-fullscreen-sm-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }

  .modal-fullscreen-sm-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }

  .modal-fullscreen-sm-down .modal-header {
    border-radius: 0;
  }

  .modal-fullscreen-sm-down .modal-body {
    overflow-y: auto;
  }

  .modal-fullscreen-sm-down .modal-footer {
    border-radius: 0;
  }
}

@media (max-width: 767.98px) {
  .modal-fullscreen-md-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }

  .modal-fullscreen-md-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }

  .modal-fullscreen-md-down .modal-header {
    border-radius: 0;
  }

  .modal-fullscreen-md-down .modal-body {
    overflow-y: auto;
  }

  .modal-fullscreen-md-down .modal-footer {
    border-radius: 0;
  }
}

@media (max-width: 991.98px) {
  .modal-fullscreen-lg-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }

  .modal-fullscreen-lg-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }

  .modal-fullscreen-lg-down .modal-header {
    border-radius: 0;
  }

  .modal-fullscreen-lg-down .modal-body {
    overflow-y: auto;
  }

  .modal-fullscreen-lg-down .modal-footer {
    border-radius: 0;
  }
}

@media (max-width: 1199.98px) {
  .modal-fullscreen-xl-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }

  .modal-fullscreen-xl-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }

  .modal-fullscreen-xl-down .modal-header {
    border-radius: 0;
  }

  .modal-fullscreen-xl-down .modal-body {
    overflow-y: auto;
  }

  .modal-fullscreen-xl-down .modal-footer {
    border-radius: 0;
  }
}

@media (max-width: 1399.98px) {
  .modal-fullscreen-xxl-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }

  .modal-fullscreen-xxl-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }

  .modal-fullscreen-xxl-down .modal-header {
    border-radius: 0;
  }

  .modal-fullscreen-xxl-down .modal-body {
    overflow-y: auto;
  }

  .modal-fullscreen-xxl-down .modal-footer {
    border-radius: 0;
  }
}
</style>