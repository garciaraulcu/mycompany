<template>
  <footer class="footer">
    <div class="container" style="padding: 70px 20px 50px 20px">
      
      <small>Hecho en México, {{ getYear() }}</small>
      <br>
      <small>Sitio Web Administrados por RET Hack</small>
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
