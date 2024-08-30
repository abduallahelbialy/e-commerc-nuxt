<template>
  <div class="OurProducts">
    <div class="container">
      <div class="row">
        <div class="title-logo d-flex gap-2 align-items-center mb-3">
          <img src="../assets/imgs/Rectangle 17.png" alt="" />
          <span class="text-danger fw-medium">Our Products</span>
        </div>
        <div
          class="d-flex justify-content-between align-items-center mb-3 flex-wrap"
        >
          <div class="d-flex gap-5 align-items-center">
            <div class="Flash">
              <h1>Explore Our Products</h1>
            </div>
          </div>
          <div class="arror d-flex gap-2">
            <img
              src="../assets/imgs/Fill With Left Arrow.png"
              alt="Previous Slide"
              class="swiper-arror-prev"
            />

            <img
              src="../assets/imgs/Fill with Right Arrow.png"
              alt="Next Slide"
              class="swiper-arror-next"
            />
          </div>
        </div>
        <swiper
          :navigation="{
            nextEl: '.swiper-arror-next',
            prevEl: '.swiper-arror-prev',
          }"
          :spaceBetween="20"
          :breakpoints="{
            0: {
              slidesPerView: 1,
            },
            477: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }"
          :modules="modules"
          class="mySwiper mt-2"
        >
          <swiper-slide v-for="(product, index) in products" :key="index">
            <div class="products-container">
              <div class="product-card m-auto">
                <div class="product-image-container">
                  <!-- <div class="discount-badge">-{{ product.discount }}%</div> -->
                  <img
                    :src="product.image"
                    alt="Product Image"
                    class="product-image"
                  />
                  <div class="action-icons">
                    <i
                      :class="{
                        'pi pi-heart': true,
                        'text-red': isFavorite(product.id),
                      }"
                      @click="toggleFavorite(product)"
                    ></i>
                    <nuxt-link :to="`/products/${product.id}`">
                      <i class="pi pi-eye"></i>
                    </nuxt-link>
                  </div>
                </div>
                <div class="cart">
                  <i
                    :class="{
                      'pi pi-cart-arrow-down': true,
                      'text-red pi-cart-black': isInCart(product.id),
                    }"
                    @click="handleCartClick(product)"
                  ></i>
                </div>
                <div class="product-info d-flex flex-column align-items-start">
                  <h3 class="product-name">{{ product.name }}</h3>
                  <div class="product-prices">
                    <span class="new-price">${{ product.newPrice }}</span>
                    <span class="old-price">${{ product.oldPrice }}</span>
                  </div>
                  <div class="product-rating">
                    <span class="stars">{{ product.stars }}</span>
                    <span class="reviews">({{ product.reviews }})</span>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>


     <!-- ///section other product/// -->
      <swiper  :spaceBetween="20"
          :breakpoints="{
            0: {
              slidesPerView: 1,
            },
            477: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }"
         
          class="mySwiper mt-5">

      <swiper-slide v-for="(product, index) in productsTwo" :key="index">
            <div class="products-container">
              <div class="product-card m-auto">
                <div class="product-image-container">
                  <div class="discount-badge">{{ product.discount }}</div>
                  <img
                    :src="product.image"
                    alt="Product Image"
                    class="product-image"
                  />
                  <div class="action-icons">
                    <i
                      :class="{
                        'pi pi-heart': true,
                        'text-red': isFavorite(product.id),
                      }"
                      @click="toggleFavorite(product)"
                    ></i>
                    <nuxt-link :to="`/products/${product.id}`">
                      <i class="pi pi-eye"></i>
                    </nuxt-link>
                  </div>
                </div>
                <div class="cart">
                  <i
                    :class="{
                      'pi pi-cart-arrow-down': true,
                      'text-red pi-cart-black': isInCart(product.id),
                    }"
                    @click="handleCartClick(product)"
                  ></i>
                </div>
                <div class="product-info d-flex flex-column align-items-start">
                  <h3 class="product-name">{{ product.name }}</h3>
                  <div class="product-prices">
                    <span class="new-price">${{ product.newPrice }}</span>
                    <span class="old-price">${{ product.oldPrice }}</span>
                  </div>
                  <div class="product-rating">
                    <span class="stars">{{ product.stars }}</span>
                    <span class="reviews">({{ product.reviews }})</span>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
      </swiper>

        <div class="btn mt-4 pt-2 mb-5">
          <button>View All Products</button>
        </div>
       
      </div>
      <Featured/>
    </div>
  </div>
</template>

<script>
import Featured from "../pages/Featured.vue"
import { mapActions, mapGetters } from "vuex";
import img1 from "../assets/imgs/Frame 604 (2).png";
import img2 from "../assets/imgs/Frame 604 (1).png";
import img3 from "../assets/imgs/Frame 604.png";
import img4 from "../assets/imgs/curology-j7pKVQrTUsM-unsplash 1.png";
import img5 from "../assets/imgs/Frame 608 (3).png";
import img6 from "../assets/imgs/Frame 608 (2).png";
import img7 from "../assets/imgs/Frame 608 (1).png";
import img8 from "../assets/imgs/Frame 608 (4).png";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
export default {
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      products: [
        {
          id: 471,
          name: "Breed Dry Dog Food",
          image: img1,
          discount: 40,
          newPrice: 120,
          oldPrice: 160,
          stars: "★★★★★",
          reviews: 88,
          icon: " pi pi-cart-arrow-down",
        },

        {
          id: 102,
          name: "CANON EOS DSLR Camera",
          image: img2,
          discount: 20,
          newPrice: 80,
          oldPrice: 100,
          stars: "★★★★☆",
          icon: " pi pi-cart-arrow-down",
          reviews: 45,
        },
        {
          id: 123,
          name: "ASUS FHD Gaming Laptop",
          image: img3,
          discount: 20,
          newPrice: 80,
          oldPrice: 100,
          stars: "★★★★☆",
          icon: " pi pi-cart-arrow-down",
          reviews: 45,
        },
        {
          id: 447,
          name: "Curology Product Set ",
          image: img4,
          discount: 20,
          newPrice: 80,
          oldPrice: 100,
          stars: "★★★★☆",
          icon: " pi pi-cart-arrow-down",
          reviews: 45,
        },
        {
          id: 4487,
          name: "Curology Product Set ",
          image: img4,
          discount: 20,
          newPrice: 80,
          oldPrice: 100,
          stars: "★★★★☆",
          icon: " pi pi-cart-arrow-down",
          reviews: 45,
        },
      ],
      productsTwo: [
        {
          id: 4771,
          name: "Kids Electric Car",
          image: img5,
          discount: "New",
          newPrice: 120,
          oldPrice: 160,
          stars: "★★★★★",
          reviews: 88,
          icon: " pi pi-cart-arrow-down",
        },

        {
          id: 1002,
          name: "Jr. Zoom Soccer Cleats",
          image: img6,
          discount:"New",
          newPrice: 80,
          oldPrice: 100,
          stars: "★★★★☆",
          icon: " pi pi-cart-arrow-down",
          reviews: 45,
        },
        {
          id: 1223,
          name: "GP11 Shooter USB Gamepad",
          image: img7,
          discount:"New",
          newPrice: 80,
          oldPrice: 100,
          stars: "★★★★☆",
          icon: " pi pi-cart-arrow-down",
          reviews: 45,
        },
        {
          id: 4447,
          name: "Quilted Satin Jacket ",
          image: img8,
          discount: "New",
          newPrice: 80,
          oldPrice: 100,
          stars: "★★★★☆",
          icon: " pi pi-cart-arrow-down",
          reviews: 45,
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    Featured
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  computed: {
    ...mapGetters(["isInCart"]), // Use the isInCart getter
  },
  methods: {
    ...mapActions(["toggleFavorite"]),
    isFavorite(id) {
      return this.$store.getters.isFavorite(id);
    },
    ...mapActions(["addToCart"]), // Map the addToCart action
    handleCartClick(product) {
      this.addToCart(product);
    },
    updateCountdown() {
      const targetDate = new Date("2024-09-01T23:59:59").getTime();
      const currentTime = new Date().getTime();
      const timeDifference = targetDate - currentTime;

      this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    },
  },
  mounted() {
    this.updateCountdown();
    setInterval(this.updateCountdown, 1000);
  },
};
</script>

<style scoped>
.OurProducts {
  padding: 30px 0;
}
.arror {
  cursor: pointer;
}
.text-red {
  background-color: red !important;
}
.arror-img {
  width: 100%;
}
.Flash h1 {
  font-size: 28px;
}
a {
  text-decoration: none;
}
.product-card {
  width: 320px;
  /* border: 1px solid #e0e0e0; */
  border-radius: 8px;
  overflow: hidden;
  background-color: #e0e0e0;
  text-align: center;
}

.product-image-container {
  position: relative;
}

.discount-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: var(--green);
  color: #fff;
  padding: 4px 10px;
  font-size: 14px;
  border-radius: 4px;
}

.product-image {
  width: 80%;
  height: 230px;
  padding: 15px;
  margin: 0 auto;
}

.action-icons {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.action-icons i {
  font-size: 20px;
  color: #333;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cart i {
  font-size: 20px;
  color: #000;
  cursor: pointer;
  width: 40px;
  height: 40px;
  margin: 2px 6px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

 
.product-info {
  padding: 7px;
  background-color: #fff;
}

.product-name {
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
}

.product-prices {
  margin: 10px 0;
}

.new-price {
  color: #e74c3c;
  font-weight: bold;
  font-size: 18px;
}

.old-price {
  color: #999;
  text-decoration: line-through;
  margin-left: 10px;
}

.product-rating {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

.stars {
  color: #f39c12;
  font-size: 18px;
}

.reviews {
  margin-left: 5px;
  color: #999;
}
@media (max-width: 477px) {
  .Flash h1 {
    font-size: 20px;
  }
 
}
</style>
