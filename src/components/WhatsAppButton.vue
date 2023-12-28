<template>
  <div>
    <div class="text-right">
      <a
        href="https://wa.me/525564047523?text=Hola!%20Me%20Gustaria%20cotizar%20una%20Pagina%20Web"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="../assets/wa.png"
          alt="Watsapp"
          class="wa wa-scale"
          srcset=""
          id="wa"
        />
      </a>
    </div>
  </div>
</template>

<style scoped>
.wa {
  width: 6rem;
  position: fixed;
  right: 0;
  top: 85%;
  z-index: 1;
  bottom: 0;
}

.wa-scale {
  animation-name: scale;
  animation-duration: 0.3s;
  animation-delay: 1s;
}
</style>
