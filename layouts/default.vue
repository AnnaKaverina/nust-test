<template>
  <div>
    <Header />
    <div class="main">
      <div class="container">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {
    Header
  }
}
</script>