<template>
  <div>
    <nav-bar />
        <alert-message/>
        

        <router-view class="bg-view"></router-view>
    <whats-app-button/>
      
    <t-footer class="footer"/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import TFooter from "./T-Footer.vue";
import AlertMessage from './components/AlertMessage.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'

export default {
  name: "App",
  components: {
    NavBar,
    TFooter,
    AlertMessage,
    WhatsAppButton,
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
.bg-view{
    background-color: #222;
    color: #fff;
}
</style>
