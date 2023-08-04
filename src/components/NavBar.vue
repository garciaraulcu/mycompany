<template>
  <div class="topnav" id="myTopnav">
    <router-link class="app-link active" to="/">
        <app-name/>
    </router-link>
    <router-link class="app-link" to="/about">Acerca de Nosotros</router-link>
    <router-link class="app-link" to="/customers">Nuestros Clientes</router-link>

    <router-link class="app-link" to="/services">Servicios</router-link>

    <a
      href="javascript:void(0);"
      class="app-link icon"
      style="color: white"
      v-on:click="myFunctionTab()"
    >
      <i class="fa fa-bars"></i>
    </a>
  </div>
</template>

<script>
import AppName from './AppName.vue';
export default {
  components: { AppName },
  data() {
    return {};
  },
  methods: {
    myFunctionTab() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    },
  },
};
</script>

<style scoped>
.topnav {
  overflow: hidden;
  background-color: black;
  top: 0;
  width: 100%;
}

.app-link {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.app-link:hover {
  background-color: #555;
  color: #f2f2f2;
}

.active {
  background-color: #01182a;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .app-link:not(:first-child) {
    display: none;
  }
  .app-link.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {
    position: relative;
  }
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive .app-link {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
