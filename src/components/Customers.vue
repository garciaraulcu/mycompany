<template>
  <div class="p-3">
    <div class="container">
      <h1>Nuestros Clientes</h1>
      <p>
        Estos son los Proyectos que hemos desarrollado y Administramos.
      </p>
      <br>
      <div class="row container">
          <div class="col-md-4">
              <div class="card-customer">
                <div>
                      <img src="../assets/acashop.png" alt="E-mercado" style="width:100%">
                </div>
                <div>
                  <br>
                      <b>AcaShop</b>
                      <ul>
                        <li>Tienda Online</li>
                        <li>Status: <b>En Linea</b></li>
                      </ul>
                      <a href="http://acashop.rf.gd" class="btn btn-dark" target="_blank">Visitar</a>
                </div>
          </div>
          </div>
          <div class="col-md-4">
                            <div class="card-customer">
                  <div>
                        <img src="../assets/futfest.png" alt="E-mercado" style="width:100%">
                  </div>
                  <div>
                    <br>
                        <b>FUT FEST</b>
                        <ul>
                          <li>Aplicacion Web para Torneos de Futbol Soccer.</li>
                          <li>Status: <b>Suspendido Temporalmente</b></li>
                        </ul>
                        <a href="https://futfest.000webhostapp.com/" class="btn btn-dark" target="_blank">Visitar</a>
                  </div>
              </div>
          </div>
          <div class="col-md-4">
                            <div class="card-customer">
                  <div>
                        <img src="../assets/linternazzionale.png" alt="E-mercado" style="width:100%">
                  </div>
                  <div>
                    <br>
                        <b>L'Internazzionale</b>
                        <ul>
                          <li>Aplicacion Web de Noticias Internacionales.</li>
                          <li>Status: <b>En Linea</b></li>
                        </ul>
                        <a href="https://linternazzionale.000webhostapp.com/" class="btn btn-dark" target="_blank">Visitar</a>
                  </div>
              </div>
          </div>
          <div class="col-md-4">
              <div class=" card-customer">
                  <div>
                        <img src="../assets/capwash.png" alt="E-mercado" style="width:100%">
                  </div>
                  <div>
                    <br>
                        <b>CAP WASH</b>
                        <ul>
                          <li>Tienda Online de Gorras</li>
                          <li>Status: <b>En Desarrollo</b></li>
                        </ul>
                        <a href="https://capwashdemo.000webhostapp.com/" class="btn btn-dark" target="_blank">Visitar</a>

                  </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
b,ul,li{
  color: #fff;
}

.card-customer{
  padding: 5px 5px 5px 5px;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid #666;
}

.btn:hover{
    color: #fff;
    background-color: #666;
}
.row > div{
  padding: 5px;
}
</style>


