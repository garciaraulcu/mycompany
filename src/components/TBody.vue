<template>
  <div class="container" id="about" style="display: none">
    <br />
    <br />
    <br />
    <h3>Tecnologias Unidas (T-United)</h3>
    <p>
      <center>
        <img src="../assets/t-united.png" alt="imgVue" style="width: 40%" />
      </center>
    </p>
    <p>
      Somos una organizacion de Diseño y Desarrollo Web, Investigacion y
      Desarrollo de Software para Tecnologias de la Informacion.
    </p>
    <p>
      Nos Apaciona la Tecnologia para la Solucion de Problemas de la Vida a
      traves del Software.
    </p>

    <p>
      Brindamos soluciones y servicios a empresas y negocios que quieran mostrar
      al mundo sus proyectos. Nuestro equipo esta probado y capacitado para la
      creacion, el diseño y desarrollo de Aplicaciones que permitan ofrecer a
      nuestros clientes la mejor experiencia al sus usuarios.
    </p>
    <p>
      Esperamos tener la oportunidad de ayudarte a que tus ideas y proyectos se
      hagan realidad y cumplir tus objetivos.
    </p>
    <p>
      T-United.
      <br />
      10 de Octubre 2022.
    </p>
  </div>
  <div id="home" class="container">
    <br />
    <br />
    <center>
      <img src="../assets/t-united.png" alt="imgVue" style="width: 40%" />
      <br />
      <br />
      <h3><i>Soluciones en Desarollo Web.</i></h3>
    </center>

    <caru-sel />
  </div>
  <br>
  <br>

  <div class="container" id="customers" style="width: 100%">
    <div class="tittle">
    <h3 class="container">Own Customers</h3>
    </div>
    <br>
    <div class="row container">
      <div class="col ">
        <a href="https://futfes.netlify.app/"  target="_blank"><img src="../assets/futfes.png" style="width: 30%" /></a>
        <h3 class="container"><b><i><a href="https://futfes.netlify.app/">FutFes</a></i></b></h3>
      </div>
      <div class="w-100"></div>

    </div>
  </div>
</template>

<script>
import CaruSel from "./CaruSel.vue";
export default {
  components: { CaruSel },
};
</script>

<style scoped>
.tittle {
  padding: 5px 5px 5px 5px;
  background-color: darkorchid;
  color: white;

}
</style>
