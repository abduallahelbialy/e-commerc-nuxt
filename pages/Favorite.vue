<template>
  <div class="Wishlist">
    <div class="container">
      <div class="row">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div class="wih">
            <p class="fw-semibold fs-5">Wishlist ({{ favoriteCount }})</p>
          </div>
          <div class="btwhit">
            <button>Move All To Bag</button>
          </div>
        </div>
        <div v-if="favoriteProducts.length === 0" class="text-center fw-medium">
          No favorite products yet.
        </div>
        <div v-else>
          <div
            class="d-flex justify-content-between align-items-center flex-wrap mt-3"
          >
            <div
              v-for="product in favoriteProducts"
              :key="product.id"
              class="product-card"
            >
              <div class="product-image-container">
                <div class="discount-badge">-{{ product.discount }}%</div>

                <img :src="product.image" alt="Product Image" />
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
              <button
                @click="removeFromFavorites(product.id)"
                class="remove-btn"
              >
                <i class="pi pi-trash"></i>
              </button>
            </div>
          </div>
        </div>
        <Selling title="Just For You" see="See All" best="" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Selling from "../pages/Selling.vue";

export default {
  components: { Selling },
  computed: {
    ...mapGetters(["favoriteProducts", "favoriteCount", "isInCart"]),
  },
  methods: {
    ...mapActions(["addToCart"]), // Map the addToCart action
    handleCartClick(product) {
      this.addToCart(product);
    },
    ...mapActions(["REMOVE_FROM_FAVORITES"]),
    removeFromFavorites(productId) {
      this.REMOVE_FROM_FAVORITES(productId)
        .then(() => {
          console.log("Product removed from favorites");
        })
        .catch((error) => {
          console.error("Failed to remove product from favorites", error);
        });
    },
  },
};
</script>

<style scoped>
.Wishlist {
  padding: 20px 0;
}
.product-card {
  position: relative;
  max-width: 320px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background-color: #e0e0e0;
  text-align: center;
}
.product-image-container {
  position: relative;
}
.btwhit button {
  padding: 10px 45px;
  background-color: transparent;
  color: #000;
  border-radius: 4px;
  border: 3px solid #dddd;
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
  max-width: 250px;
  padding: 10px;
  margin: auto;
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
/* .active-cart i {
  background-color: red !important;
  
} */
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
.remove-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: red;
  cursor: pointer;
}
.remove-btn i {
  font-size: 20px;
}
</style>
