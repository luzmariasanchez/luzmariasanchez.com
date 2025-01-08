<template>
  <form v-on:submit.prevent="handleSubmit" class="w-full ">
    <fieldset class="mb-5">
      <label class="block mb-1 text-gray-200">{{ $t('contact.email-label') }}</label>
      <input type="email" name="email" v-model="email" required
        class="w-full px-4 py-3 border-2 placeholder:text-gray-800 text-white rounded-md outline-none placeholder:text-gray-200 bg-black focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 border-gray-600 focus:border-white ring-0" />
    </fieldset>
    <fieldset class="mb-5">
      <label class="block mb-1 text-gray-200">{{ $t('contact.message-label') }}</label>
      <textarea type="text" name="message" rows="5" v-model="message" required
        class="w-full px-4 py-3 border-2 placeholder:text-gray-800 text-white placeholder:text-gray-200 bg-black rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 border-gray-600 focus:border-white ring-0"></textarea>
    </fieldset>

    <button
      class="w-full py-4 px-7 font-semibold transition-colors rounded-md focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 bg-white text-black border-2 border-white hover:bg-black hover:text-white hover:border-2 hover:border-white">
      <template v-if="sending">
        <i class="icon-spin animate-spin"></i>
      </template>
      <template v-else> {{ $t('contact.send-label') }} </template>
    </button>
    <p v-if="status" class="mt-5 text-center text-white">{{ status }}</p>
  </form>
</template>

<script>
export default {
  props: {
    formUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      email: '',
      message: '',
      status: '',
      sending: false,
    }
  },
  methods: {
    handleSubmit(event) {
      this.status = ''

      if (!this.email.length) {
        this.status = this.$i18n.t('contact.email-error')
        return
      }
      if (!this.message.length) {
        this.status = this.$i18n.t('contact.message-error')
        return
      }

      const data = JSON.stringify({
        email: this.email,
        message: this.message,
      })

      this.sending = true
      fetch(this.formUrl, {
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then((response) => {
          this.sending = false
          if (response.status != 200) {
            this.status = this.status = this.$i18n.t('contact.send-error')
          } else {
            this.status = this.status = this.$i18n.t('contact.sent')
            this.resetForm()
          }
        })
        .catch((error) => {
          this.status = this.status = this.$i18n.t('contact.send-error')
          this.sending = false
        })
    },
    resetForm() {
      this.email = ''
      this.message = ''
    },
  },
}
</script>
