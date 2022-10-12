<template>
   <nav-bar/>
   <br>
   <t-body/>
   <br>
   <br>

   <t-footer/>
</template>

<script>
import NavBar from './components/NavBar.vue'
import TBody from './components/TBody.vue'
import TFooter from './T-Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    TBody,
    TFooter
  }
}

</script>
<style>



</style>
