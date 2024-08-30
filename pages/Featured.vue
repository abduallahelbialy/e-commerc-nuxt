<template>
  <div class="Featured">
    <div class="container">
      <div class="row">
        <div class="title-logo d-flex gap-2 align-items-center mb-3">
          <img src="../assets/imgs/Rectangle 17.png" alt="" />
          <span class="text-danger fw-medium">Featured</span>
        </div>
        <div
          class="d-flex justify-content-between align-items-center mb-3 flex-wrap"
        >
          <div class="d-flex gap-5 align-items-center">
            <div class="Flash">
              <h1>New Arrival</h1>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="overlay-container">
            <img
              src="../assets/imgs/ps5-slim-goedkope-playstation_large 1.png"
              alt="PlayStation 5"
              class="img-fluid"
              id="spichal"
              width="100%"
            />
            <div class="overlay">
              <h3>PlayStation 5</h3>
              <p>
                Black and White version of the PS5 <br />
                coming out on sale.
              </p>
              <p class="shopnow mb-2">Shop Now</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="row">
            <div class="col-12">
              <div class="overlay-container">
                <img
                  src="../assets/imgs/WhatsApp Image 2024-08-30 at 5.42.21 PM.jpeg"
                  alt="Women's Collections"
                  class="img-fluid"
                />
                <div class="overlay">
                  <h3>youth's Collections</h3>
                  <p>
                    Featured youth collections that <br />
                    give you another vibe.
                  </p>
                  <p class="shopnow mb-2">Shop Now</p>
                </div>
              </div>
            </div>
            <div class="col-6 mt-2 pt-2">
              <div class="overlay-container">
                <img
                  src="../assets/imgs/Frame 707.png"
                  alt="Speakers"
                  class="img-fluid"
                />
                <div class="overlay">
                  <h3>Speakers</h3>
                  <p>Amazon wireless speakers.</p>
                  <p class="shopnow mb-2">Shop Now</p>
                </div>
              </div>
            </div>
            <div class="col-6 mt-2 pt-2">
              <div class="overlay-container">
                <img
                  src="../assets/imgs/652e82cd70aa6522dd785109a455904c.png"
                  alt="Perfume"
                  class="img-fluid"
                />
                <div class="overlay">
                  <h3>Perfume</h3>
                  <p>GUCCI INTENSE OUD EDP</p>
                  <p class="shopnow mb-2">Shop Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- //card// -->
        <div class="d-flex justify-content-evenly  gap-3 flex-wrap mt-4 pt-4 flex-wrap">
          <div class="icon-container">
            <div class="icon-circle">
              <i class="pi pi-car"></i>
            </div>
            <h3>FREE AND FAST DELIVERY</h3>
            <p>Free delivery for all orders over $140</p>
          </div>
          <div class="icon-container">
            <div class="icon-circle">
              <i class="pi pi-headphones"></i>
            </div>
            <h3>24/7 CUSTOMER SERVICE</h3>
            <p>Friendly 24/7 customer support</p>
          </div>
          <div class="icon-container">
            <div class="icon-circle">
              <i class="pi pi-check-circle "></i>
            </div>
            <h3>MONEY BACK GUARANTEE</h3>
            <p>We reurn money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.Featured {
  padding: 20px 0;
}
.overlay-container {
  position: relative;
}

.overlay-container img {
  width: 100%;
  /* max-width: 300px; */
  height: 304px;
  margin: auto;
  padding: 18px;
  display: block;
  background-color: black;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: white;
  padding: 10px;
}

.overlay h3 {
  margin: 4px;
  font-size: 17px;
  line-height: 2;
}

.overlay p {
  margin: 6px 0;
  font-size: 14px;
  color: #fff !important;
}

#spichal {
  height: 624px;
}

.shopnow {
  font-size: 15px;
  font-weight: 500;
  border-bottom: 1px solid #fff;
  width: fit-content;
  padding: 5px;
  cursor: pointer;
}
.Flash h1 {
  font-size: 28px;
}
a {
  text-decoration: none;
}

.icon-container {
  text-align: center;
  margin-top: 20px;
}

.icon-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #d3d3d3;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 10px auto;
  position: relative;
}

.icon-circle i {
  font-size: 24px;
  color: #fff;
  background-color: #000;
  border-radius: 50%;
  padding: 20px;
}

h3 {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0 5px;
}

p {
  font-size: 14px;
  color: #555;
}

@media (max-width: 477px) {
  .Flash h1 {
    font-size: 20px;
  }
  .overlay-container img {
    width: 100%;
    /* max-width: 300px; */
    height: 304px;
    margin: auto;
    padding: 18px;
    display: block;
    background-color: black;
    margin-bottom: 9px;
  }
  #spichal {
    height: 422px;
  }
  .overlay p {
    margin: 2px 0;
    font-size: 11px;
    
  }
}
@media (max-width: 799px) {
  .overlay-container img {
    margin-bottom: 9px;
  }
  #spichal {
    height: 422px;
  }
}
@media (max-width: 992px) {
  .overlay-container img {
    margin-bottom: 9px;
  }
  #spichal {
    height: 422px;
  }
}
</style>
