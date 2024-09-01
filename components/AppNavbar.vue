<template>
  <div>
    <nav
      id="navbar"
      class="navbar navbar-expand-lg navbar-light bg-white"
      :class="[
        'navbar',
        'navbar-expand-lg',
        'sticky-top',
        { scrolled: isScrolled },
      ]"
    >
      <div class="container">
        <nuxt-link class="navbar-brand" to="/">
          <img src="../assets/imgs/Logo.png" alt="logo" />
        </nuxt-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- eslint-disable vue/attributes-order -->
        <div
          id="navbarNav"
          class="collapse navbar-collapse"
          ref="navbarContent"
        >
          <ul class="navbar-nav m-auto">
            <li v-for="lan in navLinks" class="nav-item" :key="lan.id">
              <nuxt-link
                class="nav-link"
                exact-active-class="active"
                :to="lan.path"
                >{{ lan.link }}</nuxt-link
              >
            </li>
          </ul>
          <div
            class="icons d-flex justify-content-between align-items-center gap-4"
          >
            <div
              class="search-box d-flex justify-content-center align-items-center"
            >
              <input
                type="text"
                class="search-input"
                placeholder=" What are you looking for?"
              />
              <button class="search-button">
                <i class="pi pi-search"></i>
              </button>
            </div>
            <div class="group d-flex align-items-center" v-if="$route.path !== '/Signup' && $route.path !== '/Login'">
              <div class="position-relative">
                <span class="numbercart position-absolute">{{
                  cartCount
                }}</span>
              </div>
              <nuxt-link to="/cart" >
                <img src="../assets/imgs/Cart1 with buy.png" alt="cart" />
              </nuxt-link>
              <div class="position-relative">
                <span class="number position-absolute">{{
                  favoriteCount
                }}</span>
              </div>
              <nuxt-link to="/Favorite">
                <img src="../assets/imgs/Wishlist.png" alt="love" />
              </nuxt-link>
              <nuxt-link to="/profile">
                <i class="pi pi-user" style="font-size: 20px"></i>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div>
      <slot />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      isScrolled: false,
      navLinks: [
        { id: 1, link: "Home", path: "/" },
        { id: 2, link: "Contact", path: "/Contact" },
        { id: 2, link: "About", path: "/about" },
        { id: 3, link: "Sign Up", path: "/Signup" },
      ],
    };
  },
  computed: {
    ...mapGetters(["favoriteCount", "cartCount"]),
  },
  methods: {
    toggleMenu() {
      const navbarContent = this.$refs.navbarContent;
      if (navbarContent.classList.contains("show")) {
        navbarContent.classList.remove("show");
      } else {
        navbarContent.classList.add("show");
      }
    },
    closeMenu() {
      const navbarContent = this.$refs.navbarContent;
      if (navbarContent.classList.contains("show")) {
        navbarContent.classList.remove("show");
      }
    },
    handleClickOutside(event) {
      const navbarContent = this.$refs.navbarContent;
      if (!navbarContent.contains(event.target)) {
        this.closeMenu();
      }
    },
  },
  // eslint-disable-next-line vue/order-in-components
  mounted() {
    window.addEventListener("click", this.handleClickOutside);
    window.addEventListener("scroll", this.handleScroll);
  },

  // eslint-disable-next-line vue/order-in-components
  beforeUnmount() {
    window.removeEventListener("mousemove", this.updateMousePosition);
    window.removeEventListener("click", this.handleClickOutside);
    window.removeEventListener("scroll", this.handleScroll);
  },
  // eslint-disable-next-line vue/order-in-components
  created() {
    this.$watch(
      () => this.$route.path,
      (newPath, oldPath) => {
        this.currentPath = newPath;
      }
    );
  },
};
</script>
<style scoped>
.navbar {
  background: transparent ;
  backdrop-filter: blur(15px);
  transition: background-color 0.3s ease;
  border-bottom: 1px solid #ddd;
}
.navbar.scrolled {
  background-color: rgba(37, 0, 108, 0.8) !important;
}
.navbar-nav a {
  color: #000;
  padding: 0 17px !important;
  /* margin: 12px 0 !important; */
  font-weight: 500;
  font-size: 17px;
}
.active {
  position: relative;
  width: fit-content;
  font-weight: bold;
}
.active::after {
  content: "";
  position: absolute;
  height: 3px;
  background-color: #ddd;
  left: 0;
  right: 0;
  margin: auto;
}

.active::after {
  bottom: -6px; /* المسافة بين النص والخط الثاني */
  width: 60%; /* عرض الخط الثاني */
}
.search-box {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 3px 10px;
  background-color: #ddd;
}
.search-input {
  flex-grow: 1;
  border: none;
  outline: none;
  padding: 7px;
  font-size: 16px;
  border-radius: 6px;
  background-color: #ddd;
}

.search-button {
  background: #ddd;
  border: none;
  cursor: pointer;
  color: #555;
  font-size: 18px;
}

.search-button i {
  font-size: 18px;
}
.number {
  font-size: 15px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: red;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px;
  top: -23px;
  left: 14px;
  font-weight: 500;
}
.numbercart {
  font-size: 15px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: red;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px;
  bottom: 5px;
  left: 16px;
  font-weight: 500;
}
@media (max-width: 477px) {
  .search-box {
    display: none !important;
  }
}
</style>
