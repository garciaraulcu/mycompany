<template>
  <div>
    <div class="bg-warning p-2" id="close">
      <div class="text-right">
                <button class="btn" v-on:click="closeAlertMsg">
                  <b> 
                      <i class="fa fa-times" aria-hidden="true"></i>  
                  </b>
                </button>
      </div>
      <p class="container">
        Esta pagina esta en periodo de constantes cambios y Mantenimiento hasta nuevo aviso! Gracias.
      </p>

    </div>

    <div class="bg-danger p-2">
      <br>
      <p class="text-white container">
        <b>Buen Fin! | 30% OFF - Vigencia hasta: 06 de Enero del 2024.</b>
      </p>
    </div>
  </div>
</template>


<script>
export default {
    methods: {
        closeAlertMsg(){
            document.getElementById('close').style.display = "none"
        }
    },
}
</script>

<style scoped>
.btn-close{
  top: 50%;
  right: 0%;
  padding: 12px 16px;
}
p{
  text-align: justify;
}

</style>