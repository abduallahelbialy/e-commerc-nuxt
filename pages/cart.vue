<template>
  <div class="cart">
    <div class="container">
      <div class="row">
        <div class="title">
          <span class="text-black-50 p-1"
            >Home<span class="p-1">/</span
            ><span class="text-dark fw-medium p-1">Cart</span></span
          >
        </div>
        <div class="box mt-3 bg-white">
          <div
            class="d-flex justify-content-between align-items-center flex-wrap"
          >
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
        </div>
        <div class=" text-center fw-semibold mt-2" v-if="cartProducts && cartProducts.length === 0">
          Your cart is empty.
        </div>
        <div v-else>
          <div
            v-for="product in cartProducts"
            :key="product.id"
            class="cart-item"
          >
            <div class="box mt-3 bg-white m-auto">
              <div
                class="d-flex justify-content-between align-items-center flex-wrap"
              >
                <div class="d-flex gap-2 align-items-center">
                  <img
                    :src="product.image"
                    alt="Product Image"
                    class="img-card"
                  />
                  <p class="fw-medium">{{ product.name }}</p>
                </div>
                <p class="fw-medium">${{ product.newPrice }}</p>
                <div class="num">
                  <input type="number" v-model.number="product.quantity" />
                </div>
                <p class="fw-medium">
                  ${{ (product.newPrice * product.quantity).toFixed(2) }}
                </p>
              </div>
            </div>
            <div class="close position-relative">
              <i
                class="pi pi-times text-white position-absolute"
                @click="removeFromCart(product.id)"
              ></i>
            </div>
          </div>
        </div>
        <div
          class="btn3 d-flex justify-content-between align-items-center mt-3"
        >
          <nuxt-link to="/">
            <button>Return To Shop</button>
          </nuxt-link>
          <button @click="reloadPage">Update Cart</button>
        </div>
        <div class="d-flex justify-content-between flex-wrap mt-4 pt-3">
          <div class="coupen d-flex gap-4 align-items-center flex-wrap">
            <input type="text" placeholder="Coupon Code" />
            <div class="btn">
              <button>Apply Coupon</button>
            </div>
          </div>
          <div class="card">
            <span class="fw-medium mb-3">Cart Total</span>
            <div class="d-flex justify-content-between mt-2 border-bottom">
              <p>Subtotal:</p>
              <p class=" fw-medium">${{ subtotal.toFixed(2) }}</p>
            </div>
            <div class="d-flex justify-content-between mt-2 border-bottom">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <div class="d-flex justify-content-between mt-2 ">
              <p>Total:</p>
              <p class=" fw-medium">${{ subtotal.toFixed(2) }}</p>
            </div>
            <div class="btn">
              <button>Procees to checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cartProducts"]),
    subtotal() {
      //total all//
      return this.cartProducts.reduce((total, product) => {
        return total + (product.newPrice * product.quantity);
      }, 0);
    }
  },
  methods: {
    ...mapActions(["removeFromCart"]),
    reloadPage() {
      window.location.reload();
    },
  },
};
</script>

<style scoped>
.cart {
  padding: 20px 0;
}
/* .cart-item {
  margin-bottom: 20px;
} */
.box {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 13px;
  text-align: center;
  border-radius: 4px;
}
.img-card {
  width: 100%;
  max-width: 100px;
}
.num input {
  width: 40px;
  height: 40px;
  border-radius: 5px;
}
.close i {
  width: 20px;
  height: 20px;
  display: flex;
  align-content: center;
  border-radius: 50%;
  padding: 4px;
  bottom: 85px;
  font-size: 12px;
  cursor: pointer;
  left: 13px;
  background-color: var(--btn-color);
}
.coupen input {
  background-color: #fff;
  padding: 10px 30px;
  outline: none;
  color: black;
  border: 2px solid #ddd;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  -o-border-radius: 4px;
}
.card {
  width: 330px;
  height: auto;
  padding: 10px;
  border: 2px solid black;
}
</style>
