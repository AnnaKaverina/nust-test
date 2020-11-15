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
import Header from '@/components/Header';
import styleHeader from '@/assets/sass/header.sass';
import styleMain from '@/assets/sass/main.sass';

export default {
  components: {
    Header
  }
}
</script>