<template>
  <div class="Selling">
    <div class="container">
      <div class="row">
        <div class="title-logo d-flex gap-2 align-items-center mb-3">
          <img src="../assets/imgs/Rectangle 17.png" alt="" />
          <span class="text-danger fw-medium">{{ title }}</span>
        </div>
        <div
          class="d-flex justify-content-between align-items-center mb-3 flex-wrap"
        >
          <div class="d-flex gap-5 align-items-center">
            <div class="Flash">
              <h1>{{ best }}</h1>
            </div>
          </div>
          <div class="arror d-flex gap-2">
            <div class="btn">
              <button>{{ see }}</button>
            </div>
          </div>
        </div>
        <div class="all-card d-flex justify-content-between">
          <div
            class="product-card m-auto"
            v-for="(product, index) in selling"
            :key="index"
          >
            <div class="product-image-container">
              <img
                :src="product.image"
                alt="Product Image"
                class="product-image"
              />
              <div class="action-icons">
                <div v-if="$route.path !=='/Favorite'">
                <i
                  :class="{
                    'pi pi-heart': true,
                    'text-red': isFavorite(product.id),
                  }"
                  @click="toggleFavorite(product)"
                ></i>
                </div>
                <nuxt-link :to="`/products/${product.id}`">
                  <i class="pi pi-eye"></i>
                </nuxt-link>
              </div>
            </div>
  <div class="cart">
  <i
    :class="{
      'pi pi-cart-arrow-down': true, 
      'text-red pi-cart-black': isInCart(product.id) 
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
        <div v-if="$route.path !== '/Favorite'">

        <Banner />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import img1 from "../assets/imgs/Frame 605.png";
import img2 from "../assets/imgs/Frame 606.png";
import img3 from "../assets/imgs/Frame 610.png";
import img4 from "../assets/imgs/Frame 612.png";
import Banner from "../pages/Banner.vue";
export default {
   props: {
    title: {
      type: String,
      default: 'This Month',
    },
    see:{
      type: String,
      default:'View All'
    },
    best:{
      type: String,
      default: ' Best Selling Products'
    }
  },
  data() {
    return {
            defaultTitle: 'Best Selling Products',

      selling: [
        {
          id: 15,
          name: "The north coat",
          image: img1,
          discount: 40,
          newPrice: 120,
          oldPrice: 160,
          stars: "★★★★★",
                    quantity: 1,

          icon: " pi pi-cart-arrow-down",
          reviews: 88,
        },

        {
          id: 16,
          name: "Gucci duffle bag",
          image: img2,
          discount: 20,
          newPrice: 80,
          oldPrice: 100,
                    quantity: 1,

          stars: "★★★★☆",
          icon: " pi pi-cart-arrow-down",
          reviews: 45,
        },
        {
          id: 17,
          name: "RGB liquid CPU Cooler",
          image: img3,
          discount: 20,
          newPrice: 80,
                    quantity: 1,

          oldPrice: 100,
          stars: "★★★★☆",
          icon: " pi pi-cart-arrow-down",
          reviews: 45,
        },
        {
          id: 18,
          name: "Small BookSelf",
          image: img4,
          discount: 20,
          newPrice: 80,
          oldPrice: 100,
                    quantity: 1,

          stars: "★★★★☆",
          icon: " pi pi-cart-arrow-down",
          reviews: 45,
        },
      ],
    };
  },
  components: { Banner },
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
  },
};
</script>

<style scoped>
.Selling {
  padding: 20px 0;
}
.Flash h1 {
  font-size: 28px;
}
a {
  text-decoration: none;
}
.text-red {
  background-color: red !important;
}
.product-card {
  max-width: 320px;
  width: 100%;
  /* border: 1px solid #e0e0e0; */
  margin: 10px !important;
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
  background-color: #e74c3c;
  color: #fff;
  padding: 4px 10px;
  font-size: 14px;
  border-radius: 4px;
}

.product-image {
  width: 100%;
  height: 100%;
  padding: 5px;
  margin:  auto;
  max-width: 250px;
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
  color: black;
  cursor: pointer;
  width: 40px;
  height: 40px;
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
  .all-card {
    flex-wrap: wrap;
  }
  .product-card {
    margin: auto !important;
    
}
}
@media (max-width: 799px) {
  .all-card {
    flex-wrap: wrap;
  }
}
@media (max-width: 992px) {
  .all-card {
    flex-wrap: wrap;
  }
}
</style>
