<template>
  <div class="mb-20 text-center w-full">
    <Subtitle :title="label || $t('content.guests')"></Subtitle>
    <div class="flex flex-wrap justify-center">
      <div v-for="(guest, guestIndex) in guests" :key="guestIndex" @click.stop="openModal(guest)">
        <Guest :guest="guest"></Guest>
      </div>
    </div>
    <Modal v-model="modalOpened">
      <GuestDetail :guest="current"></GuestDetail>
    </Modal>
  </div>
</template>

<script>

export default {
  name: "Guests",
  props: {
    guests: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      required: false
    },
  },
  data() {
    return {
      modalOpened: false,
      current: null
    }
  },
  methods: {
    openModal(guest) {
      this.current = guest;
      this.modalOpened = true;
    }
  }
}
</script>
