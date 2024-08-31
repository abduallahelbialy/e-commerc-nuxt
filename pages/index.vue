<template>
  <!-- ///home/// -->
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-lg-2">
          <div class="side-bar">
            <ul class="list py-2 px-1">
              <li class="d-flex align-items-center justify-content-between">
                Woman’s Fashion <i class="pi pi-chevron-right"></i>
              </li>
              <li class="d-flex align-items-center justify-content-between">
                Men’s Fashion<i class="pi pi-chevron-right"></i>
              </li>
              <li>Electronics</li>
              <li>Home & Lifestyle</li>
              <li>Medicine</li>
              <li>Sports & Outdoor</li>
              <li>Baby’s & Toys</li>
              <li>Groceries & Pets</li>
              <li>Health & Beauty</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-10 py-2">
          <swiper
            :pagination="true"
            :autoplay="autoplay"
            :freeMode="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide v-for="slider in sliders" :key="slider.id">
              <div class="content">
                <div
                  class="d-flex justify-content-evenly align-items-center wrap-reverse"
                >
                  <div class="text text-white">
                    <div class="iphon d-flex gap-3 align-items-center">
                      <img :src="slider.imgApp" alt="" />
                      <p class="mt-2">{{ slider.des }}</p>
                    </div>
                    <div class="up">
                      <h1 v-html="slider.text"></h1>
                    </div>
                    <div class="arror d-flex gap-3 align-items-center mt-4">
                      <span>{{ slider.textbtn }}</span>
                      <i class="pi pi-arrow-right" style="font-size: 12px"></i>
                    </div>
                  </div>
                  <div class="imgphone">
                    <img :src="slider.img" alt="" class="img-phone" />
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
        <index/>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import index from "./products/index.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import imga from "../assets/imgs/1200px-Apple_gray_logo 1.png";
import img1 from "../assets/imgs/hero_endframe__cvklg0xk3w6e_large 2.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
export default {
  name: "IndexPage",
  data() {
    return {
      autoplay: {
        delay: 2400,
        disableOnInteraction: false,
      },
      sliders: [
        {
          id: 1,
          img: img1,
          imgApp: imga,
          des: "iPhone 14 Series",
          text: "  Up to 10% <br /> off Voucher",
          textbtn: "Shop Now",
        },
        {
          id: 2,
          img: img1,
          imgApp: imga,
          des: "iPhone 14 Series",
          text: "  Up to 10% <br /> off Voucher",
          textbtn: "Shop Now",
        },
        {
          id: 3,
          img: img1,
          imgApp: imga,
          des: "iPhone 14 Series",
          text: "  Up to 10% <br /> off Voucher",
          textbtn: "Shop Now",
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    index
  },
  setup() {
    return {
      modules: [Pagination, Autoplay, FreeMode],
    };
  },
};
</script>
<style scoped>
.home {
  padding: 0px 0;
}
.content {
  background-color: black;
  background-size: cover;
  height: 50vh;
}
.side-bar {
  border-right: 1px solid #ddd;
}
.list li {
  margin: 12px 0;
  list-style: none;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
}
.list li i {
  font-size: 10px;
  font-weight: bold;
}
.up {
  /* height: 50px; */
}
.up h1 {
  line-height: 1.5;
  font-size: 40px;
}
.arror {
  cursor: pointer;
}
.img-phone {
  width: 100%;
  height: 100%;
}
.wrap-reverse {
  flex-wrap: wrap-reverse;
}
@media (max-width: 477px) {
 .up h1 {
    line-height: 1.5;
    font-size: 19px;
    margin-bottom: -18px;
}
  .imgphone {
    width: 70%;
    padding: 7px;
  }
  .side-bar {
    border-right: 1px solid #ddd;
    display: none;
}
}
</style>
