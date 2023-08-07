<template>
  <div>
    <div class="header">
      <div class="container p-3">
        <h1>
          <app-name />
        </h1>
        <h4>Diseño y Desarrollo Web.</h4>
      </div>
    </div>
    <br>
    <caru-sel/>
    <br>
    <br>
    <div class="container">
        <p>
            Diseñamos tu Pagina Web, Tienda en Linea, Blog de Noticias, etc.
        </p>
        <p>
          Servicio SEO
        </p>
        <p>
          Marketing Digital
        </p>
        <p>
            Diseñamos Apps mobiles
        </p>
    </div>
  </div>
</template>

<script>
import AppName from "./AppName.vue";
import CaruSel from './CaruSel.vue';
export default {
  components: { AppName, CaruSel },
};
</script>

<style scoped>
.header {
  background-color: #01182a;
  color: #fff;
}
</style>
