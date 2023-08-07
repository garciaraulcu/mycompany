<template>
  <footer class="footer">
    <br>
    <br>
    <div class="">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <router-link to="/terminos" class="text-white">Terminos y Condiciones</router-link>
            <br>
            <router-link to="/terminos" class="text-white">Politica de Privacidad</router-link
            >
          </div>
          <div class="col-md-4"></div>
          <div class="col-md-4"></div>
        </div>
      </div>
    </div>
    <div class="text-center">
        <br>
        <small>Hecho en México, {{ getYear() }}</small>
        <br />
        <small>Sitio Web Administrados por RET Hack</small>
        <br>
        <br>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    getYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style>
.footer {
  background-color: darkslategrey;
  color: white;
}

</style>
