<template>
  <div class="bg-danger p-2" id="promo">
      <br>
    <div class="container">
      <div class="row" >
        <div class="col-md-3">
          <p class="text-white">
            <b>Buen Fin de Año - Reyes | 30% OFF </b>
            <br />
            <small>Valido hasta: {{ getDateForHumans() }} </small>
          </p>
        </div>
        <div class="col-md-4">
              <b class="text-white">OFERTA POR TIEMPO LIMITADO</b>

          <div class="text-white size">
            {{ countdown }}
          </div>
        </div>
        <div class="col-md-3 text-center">
          <a
            href="https://wa.me/525564047523?text=Hola!%20Me%20Gustaria%20cotizar%20una%20Pagina%20Web"
            target="_blank"
            class="btn-warning btn text-dark"
            ><b>Cotizar Ahora!</b></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      countdown: "",
      intervalId: null,
      duration: 0,
      data: "2024-01-06T23:59:30",
    };
  },
  mounted() {
    this.timer();
    this.hidePromo();
  },
  methods: {
    timer() {
      // Set the target date and time for the countdown
      const targetDate = moment(this.data);

      this.intervalId = setInterval(() => {
        const now = moment();
        this.duration = moment.duration(targetDate.diff(now));

        // Format the countdown as "X days X hours X minutes X seconds"
        const days = Math.floor(this.duration.asDays());
        const hours = this.duration.hours();
        const minutes = this.duration.minutes();
        const seconds = this.duration.seconds();

        this.countdown = `${this.twoDigits(days)}d : ${this.twoDigits(hours)}h : ${this.twoDigits(minutes)}m : ${this.twoDigits(seconds)}s`;

        this.duration <= 0 ? this.hidePromo() : this.countdown;
      }, 1000);
      document.getElementById("msg").innerHTML = "";
      document.getElementById("limpiar").style.display = "none";
      document.getElementById("stop").style.display = "block";
      document.getElementById("submit").style.display = "none";
    },
    getDateForHumans() {
      return moment(this.data).locale("es").format("LL, H:mm a");
    },
    hidePromo() {
      document.getElementById("promo").style.display = "none";
    },
    twoDigits(value) {
      return value < 10 ? `0${value}` : value;
    },
  },
};
</script>

<style scoped>
.size {
  font-size: 30px;
}
</style>
