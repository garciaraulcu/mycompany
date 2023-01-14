<template>
  <div class="topnav" id="myTopnav">
    <a href="#home" class="active" v-on:click="home()">&#60;/T-Developers&#62;</a>
    <a href="#about" v-on:click="about();myFunctionTab()">Aerca de Nosotros</a>
    <a href="#contact">Contacto</a>
    <!--<a href="#customers" v-on:click="myFunctionTab()">Nuestros Clientes</a>-->

    <a
      href="javascript:void(0);"
      class="icon"
      style="color: white"
      v-on:click="myFunctionTab()"
    >
      <i class="fa fa-bars"></i>
    </a>
  </div>


</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    home() {
      document.getElementById("about").style.display = "none";
      document.getElementById("home").style.display = "block";
    },
    about() {
      document.getElementById("home").style.display = "none";
      document.getElementById("about").style.display = "block";
    },
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

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: blueviolet;
  color: #f2f2f2;
}

.topnav a.active {
  background-color: darkblue;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {
    display: none;
  }
  .topnav a.icon {
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
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
