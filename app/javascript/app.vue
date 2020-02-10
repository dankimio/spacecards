<template>
  <div class="flex min-h-screen flex-col">
    <Header />
    <router-view class="flex-1"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'

export default {
  components: { Header, Footer }
}
</script>

<style scoped>
</style>
