<template>
  <footer ref="footer">
     <div class="up position-relative">
          <img
            v-show="showUpArrow"
            @click="scrollToTop"
            :style="{ 
        display: showUpArrow ? 'block' : 'none', 
        cursor: 'pointer' 
      }"
            src="../assets/imgs/Fill with Up Arrow.png"
            alt="upscroll"
            class="position-absolute up-img img-fluid p-2"
          />
        </div>
    <div class="container">
      <div class="row">
       
        <div class="d-flex justify-content-between flex-wrap pt-4 mb-2">
          <div class="sub text-white">
            <h1 class="fs-3 line">Exclusive</h1>
            <p class="fw-semibold">Subscribe</p>
            <span>Get 10% off your first order</span>
            <div
              class="search-box d-flex justify-content-center align-items-center mt-3"
            >
              <input
                type="text"
                class="search-input"
                placeholder="Enter your email"
              />
              <button class="search-button">
                <img src="../assets/imgs/icon-send.png" alt="" />
              </button>
            </div>
          </div>
          <div class="Support text-white">
            <h1 class="fs-3 line">Support</h1>
            <p class="">
              111 Bijoy sarani, Dhaka, <br />
              DH 1515, Bangladesh.
            </p>
            <p>abduallahelbialy@gmail.com</p>
            <span>+201028924906</span>
          </div>
          <div class="Account text-white">
            <h1 class="fs-3 line">Account</h1>
            <p>My Account</p>
            <p>Login / Register</p>
            <nuxt-link to="/cart">
              <p>Cart</p>
            </nuxt-link>
            <nuxt-link to="/Favorite">
              <p>Wishlist</p>
            </nuxt-link>
            <p>Shop</p>
          </div>
          <div class="Quick text-white">
            <h1 class="fs-3 line">Quick Link</h1>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <nuxt-link to="/FAQ">
              <p>FAQ</p>
            </nuxt-link>
            <nuxt-link to="/Contact">
              <p>Contact</p>
            </nuxt-link>
          </div>
          <div class="DownloadApp text-white">
            <h1 class="fs-3 line">Download App</h1>
            <p class="fs-6 text-white-50">Save $3 with App New User Only</p>
            <div class="d-flex gap-2 align-items-center">
              <div class="RQ">
                <img
                  src="../assets/imgs/Qr Code.png"
                  alt="Qr"
                  class="img-fluid"
                />
              </div>
              <div class="google-app d-flex flex-column gap-2">
                <img
                  src="../assets/imgs/GooglePlay.png"
                  alt="GooglePlay"
                  class="img-fluid"
                />
                <img
                  src="../assets/imgs/download-appstore.png"
                  alt="appstore"
                  class="img-fluid"
                />
              </div>
            </div>
            <div class="icons d-flex gap-4 mt-4 flex-wrap">
              <i class="pi pi-facebook"></i>
              <i class="pi pi-twitter"></i>
              <i class="pi pi-instagram"></i>
              <i class="pi pi-linkedin"></i>
            </div>
          </div>
        </div>
        <div class="capy mt-2 d-flex gap-1 justify-content-center text-white-50 align-items-center">
          <p>@</p>
<p>Copyright Rimel 2024. All right reserved</p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      showUpArrow: false,
    };
  },
  methods: {
    handleScroll() {
      const footer = this.$refs.footer;
      const footerPosition = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Show or hide the up arrow based on the footer's visibility
      this.showUpArrow = footerPosition <= windowHeight;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scrolling
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style scoped>
footer {
  padding: 20px 0;
  background-color: black;
  background-size: cover;
}
.search-box {
  width: 100%;
  max-width: 230px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 3px 12px;
  background-color: transparent;
}
.search-input {
  flex-grow: 1;
  border: none;
  outline: none;
  padding: 7px;
  font-size: 16px;
  border-radius: 6px;
  background-color: transparent;
}
.search-input::placeholder{
  font-size: 13px;
}
.search-button {
  background: transparent;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 18px;
}
.search-button i {
  font-size: 18px;
}
.line {
  line-height: 2;
  font-size: 25px !important;
}
a p {
  color: white;
}
a {
  text-decoration: none;
}
.google-app {
  cursor: pointer;
}
.icons i {
  font-size: 20px;
  cursor: pointer;
}
.up-img {
  bottom: 45px;
  right: 18px;
  cursor: pointer;
}

/* //media// */
@media (max-width: 477px) {
  .line {
    font-size: 17px !important;
  }
  
  p,span,a{
    font-size: 14px;
  }
  .img-fluid {
    max-width: 70%;
    height: auto;
  }
}
</style>
