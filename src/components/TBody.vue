<template>
  <div>
    <div class="header">
      <div class="container p-5">
        <h1>
          <app-name />
        </h1>
        <h3>Soluciones en Desarrollo Web.</h3>
      </div>
    </div>
  </div>
</template>

<script>
import AppName from "./AppName.vue";
export default {
  components: { AppName },
};
</script>

<style scoped>
.header {
  background-color: #01182a;
  color: #fff;
}
</style>
