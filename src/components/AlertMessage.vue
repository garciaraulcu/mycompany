<template>
  <div>
    <div class="bg-warning p-2" id="close">
      <div class="text-right">
                <button class="btn" v-on:click="closeAlertMsg"><b> Close </b></button>
      </div>
      <p class="container">
        Esta pagina esta en periodo de Mantenimiento hasta nuevo aviso, por
        lo cual la informacion no es oficial. Gracias!
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