<template>
  <div class="flex min-h-screen flex-col">
    <TheHeader class="mb-4 md:mb-6" />
    <div class="flex-1 mb-8">
      <slot />

      <VueNotification
        classes="vue-notification container"
        position="bottom center"
        width="100%"
      />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from './TheHeader'
import TheFooter from './TheFooter'

export default {
  components: { TheHeader, TheFooter }
}
</script>
