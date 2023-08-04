<template>
  <div class="transform">
    <nav-bar />
        <router-view></router-view>
    <t-footer class="footer"/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import TFooter from "./T-Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    TFooter,
  },
};
</script>

<style scoped>
.transform{
  transform: scale(1); /* Standard Property */
transform-origin: 0 0;  /* Standard Property */
}

.footer{
  bottom: 0;
}
</style>
