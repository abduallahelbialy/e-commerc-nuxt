<template>
  <div>
    <h1>Your Favorite Products</h1>
    <div v-if="favoriteProducts.length === 0">
      No favorite products yet.
    </div>
    <div v-else>
      <div v-for="product in favoriteProducts" :key="product.id" class="product-card">
        <h3>{{ product.name }}</h3>
        <img :src="product.image" alt="Product Image" />
        <button @click="removeFromFavorites(product.id)" class="remove-btn">
          <i class="pi pi-trash"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['favoriteProducts'])
  },
  methods: {
    ...mapActions(['REMOVE_FROM_FAVORITES']),
    removeFromFavorites(productId) {
      this.REMOVE_FROM_FAVORITES(productId)
        .then(() => {
          console.log('Product removed from favorites');
        })
        .catch((error) => {
          console.error('Failed to remove product from favorites', error);
        });
    }
  }
};
</script>

<style scoped>
.product-card {
  position: relative;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
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
