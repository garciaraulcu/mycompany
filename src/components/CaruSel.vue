<template>
  <div class="container">
    <br />
    <div id="demo" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>

      <!-- The slideshow -->
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../assets/responsive.png"
            alt="Los Angeles"
            width="1100"
            height="500"
          />
        </div>

        <div class="carousel-item">
          <img
            src="../assets/bus-page.png"
            alt="New York"
            width="1100"
            height="500"
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/hotel-page.png"
            alt="New York"
            width="1100"
            height="500"
          />
        </div>
                <div class="carousel-item">
          <img
            src="../assets/travel-page.png"
            alt="New York"
            width="1100"
            height="500"
          />
        </div>
                <div class="carousel-item">
          <img
            src="../assets/rent-page.png"
            alt="New York"
            width="1100"
            height="500"
          />
        </div>

                <div class="carousel-item">
          <img
            src="../assets/social-page.png"
            alt="New York"
            width="1100"
            height="500"
          />
        </div>
                <div class="carousel-item">
          <img
            src="../assets/cv-page.png"
            alt="New York"
            width="1100"
            height="500"
          />
        </div>
                <div class="carousel-item">
          <img
            src="../assets/portafolio-page.png"
            alt="New York"
            width="1100"
            height="500"
          />
        </div>
                <div class="carousel-item">
          <img
            src="../assets/marketing-page.png"
            alt="New York"
            width="1100"
            height="500"
          />
        </div>
                <div class="carousel-item">
          <img
            src="../assets/pizza-page.png"
            alt="New York"
            width="1100"
            height="500"
          />
        </div>
      </div>

      <!-- Left and right controls -->
      <a class="carousel-control-prev" href="#demo" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#demo" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Make the image fully responsive */
.carousel-inner img {
  width: 100%;
  height: 100%;
}
</style>

