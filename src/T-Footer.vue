<template>
  <footer class="footer">
    <div class="container" style="padding: 70px 20px 50px 20px">
      
      <p>Hecho en México, {{ getYear() }}</p>

      <p style="color: white">Sitio Web Administrados por <i>T-Developers</i>.</p>
    </div>
  </footer>
</template>

<script>
export default {
  
  methods: {
    getYear(){
      return new Date().getFullYear() 
    }
  },
};
</script>

<style>
.footer{
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: darkslategrey;
   color: white;
   text-align: center;
}
</style>
