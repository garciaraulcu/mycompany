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
