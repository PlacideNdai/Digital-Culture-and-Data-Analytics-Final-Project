<template>
  <div class="mainpage">
    <Nav />
    <router-view></router-view>
  </div>
</template>

<script setup>
import Nav from './components/Nav.vue';


</script>

<style scoped>
.mainpage {
  background-image: url("./assets/FH5_image.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
}

.mainpage {
  display: flex;
  gap: 1rem;
}
</style>