<template>
  <div class="topnav" id="myTopnav">
    <router-link class="app-link active" to="/">
        <app-name/>
    </router-link>
    <router-link class="app-link" to="/about">Acerca de Nosotros</router-link>
    <div class="dropdownl">
            <button class="dropbtn">Servicios
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdownl-content p-5">
                <div class="row" >
                    <div class="col-md-4" >                      
                        <h4 class="text-white"><b>Diseño</b></h4>
                        <router-link to="" class="">Sitios Web</router-link>
                        <router-link to="" class="">Apps Mobiles</router-link>
                    </div>
                    <div class="col-md-4">                      
                        <h4 class="text-white"><b>Desarrollo Web</b></h4>
                        <router-link to="" class="">Aplicaciones Web</router-link>
                        <router-link to="" class="">Blogs</router-link>
                        <router-link to="" class="">E-Commerce</router-link>
                        <router-link to="" class="">Landing Page</router-link>
                    </div>
                        <div class="col-md-4">                      
                        <h4 class="text-white"><b>Marketing</b></h4>
                        <router-link to="" class="">Marketing Digital</router-link>
                        <router-link to="" class="">Servicio SEO</router-link>
                    </div>
                </div>
            </div>
    </div>
    <router-link class="app-link" to="/customers">Nuestros Clientes</router-link>

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

#drop:hover{
  display: block;
}


</style>
