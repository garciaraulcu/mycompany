<template>
  <div>
   <!-- <div class="bg-warning p-2" id="close">
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

    </div>-->

    
      <count-down/>
    

  </div>
</template>


<script>
import CountDown from './CountDown.vue'
export default {
  components: { CountDown },
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