<template>
  <div>
    <h1>Your Cart</h1>
    <div v-if="cartProducts && cartProducts.length === 0">
      Your cart is empty.
    </div>
    <div v-else>
      <div v-for="product in cartProducts" :key="product.id" class="cart-item">
        <h3>{{ product.name }}</h3>
        <img :src="product.image" alt="Product Image" />
        <button @click="removeFromCart(product.id)">Remove from Cart</button>
      </div>
    </div>
  </div>
</template>



<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['cartProducts']),  // جلب المنتجات من cart
  },
  methods: {
    ...mapActions(['removeFromCart']),  // ربط العملية لحذف المنتج
  },
};
</script>

<style scoped>
.cart-item {
  margin-bottom: 20px;
}
</style>
