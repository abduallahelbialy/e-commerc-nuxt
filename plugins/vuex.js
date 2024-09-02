import { createStore } from "vuex";

const store = createStore({
  state: {
    ///favoriteProducts///
    favoriteProducts: [],
    //cartProducts//
    cartProducts: [],
    //vaildtion form///
    user: {
      name: "",
      email: "",
      password: "",
      user: null,
      isLoggedIn: false,
    },
  },
  mutations: {
    //vaildtion form///

    setUser(state, user) {
      state.user = user;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
    },
    ///
    //favoriteProducts///
    ADD_TO_FAVORITES(state, product) {
      state.favoriteProducts.push(product);
    },
    REMOVE_FROM_FAVORITES(state, productId) {
      state.favoriteProducts = state.favoriteProducts.filter(
        (product) => product.id !== productId
      );
    },
    //cartProducts//

    ADD_TO_CART(state, product) {
      state.cartProducts.push(product);
    },
    REMOVE_FROM_CART(state, productId) {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== productId
      );
    },
  },
  getters: {
    //form///
    isLoggedIn: (state) => state.isLoggedIn,
    getUser: (state) => state.user,
    ///favoriteProducts///
    favoriteProducts: (state) => state.favoriteProducts,
    favoriteCount: (state) => state.favoriteProducts.length,
    //cartProducts//
    cartProducts: (state) => state.cartProducts,
    cartCount: (state) => state.cartProducts.length,
    isFavorite: (state) => (productId) =>
      state.favoriteProducts.some((product) => product.id === productId),
    isInCart: (state) => (productId) =>
      state.cartProducts.some((product) => product.id === productId),
  },
  actions: {
    registerUser({ commit }, user) {
      commit("setUser", user);
    },
    REMOVE_FROM_FAVORITES({ commit }, productId) {
      return new Promise((resolve, reject) => {
        try {
          commit("REMOVE_FROM_FAVORITES", productId);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },
    addToCart({ commit }, product) {
      commit("ADD_TO_CART", product);
    },
    removeFromCart({ commit }, productId) {
      commit("REMOVE_FROM_CART", productId);
    },
    toggleFavorite({ state, commit }, product) {
      const isFavorite = state.favoriteProducts.some(
        (favProduct) => favProduct.id === product.id
      );
      if (!isFavorite) {
        commit("ADD_TO_FAVORITES", product);
      } else {
        commit("REMOVE_FROM_FAVORITES", product.id);
      }
    },
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
});
