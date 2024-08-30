<template>
  <div class="categoryTwo">
    <div class="container">
      <div class="row">
        <div class="title-logo d-flex gap-2 align-items-center mb-3">
          <img src="../assets/imgs/Rectangle 17.png" alt="" />
          <span class="text-danger fw-medium">Categories</span>
        </div>
        <div
          class="d-flex justify-content-between align-items-center mb-3 flex-wrap"
        >
          <div class="d-flex gap-5 align-items-center">
            <div class="Flash">
              <h1>Browse By Category</h1>
            </div>
          </div>
          <div class="arror d-flex gap-2">
            <img
              src="../assets/imgs/Fill With Left Arrow.png"
              alt="Previous Slide"
              class="swiper-card-prev"
            />

            <img
              src="../assets/imgs/Fill with Right Arrow.png"
              alt="Next Slide"
              class="swiper-card-next"
            />
          </div>
        </div>
        <swiper
          :navigation="{
            nextEl: '.swiper-card-next',
            prevEl: '.swiper-card-prev',
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
            <div class="box m-auto">
              <div class="d-flex flex-column align-items-center">
                <img :src="product.image" alt="" />
                <div class="heac">
                  <h1>{{ product.name }}</h1>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <hr/>
        <Selling/>
      </div>
    </div>
  </div>
</template>

<script>
import Selling from "../pages/Selling.vue"
import img1 from "../assets/imgs/Category-CellPhone.png";
import img2 from "../assets/imgs/Category-Computer.png";
import img3 from "../assets/imgs/Category-SmartWatch.png";
import img4 from "../assets/imgs/Category-Camera.png  ";
import img5 from "../assets/imgs/Category-Headphone.png";
import img6 from "../assets/imgs/Vector (1).png";
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
      products: [
        {
          id: 1,
          name: "Phones",
          image: img1,
        },

        {
          id: 2,
          name: "Computers",
          image: img2,
        },
        {
          id: 3,
          name: "SmartWatch",
          image: img3,
        },
        {
          id: 4,
          name: "Camera",
          image: img4,
        },
        {
          id: 5,
          name: "HeadPhones",
          image: img5,
        },
        {
          id: 6,
          name: "Gaming",
          image: img6,
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    Selling
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>

<style scoped>
.categoryTwo {
  padding: 20px 0;
}
.arror {
  cursor: pointer;
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
hr{
    border: 2px solid #b6b6b6;
    margin: 30px 0;
}
.box {
  padding: 30px 30px;
  width: 200px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  transition: 0.3s;
}
.box:hover {
  background-color: var(--btn-color);
  color: white;
}
.box h1 {
  font-size: 18px;
}

@media (max-width: 477px) {
  .dot {
    display: none;
  }
  .Flash h1 {
    font-size: 20px;
  }
}
</style>
