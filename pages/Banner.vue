<template>
  <div class="banner-page">
    <div class="container">
      <div class="row">
        <div class="banner">
          <div
            class="d-flex justify-content-evenly align-items-center flex-wrap-reverse mb-3"
          >
            <div class="text text-white">
              <p>Categories</p>
              <h1>
                Enhance Your<br />
                Music Experience
              </h1>
              <div class="d-flex gap-4 flex-wrap mt-4">
                <div class="d-flex flex-column align-items-center bacolor">
                  <span class="fw-medium text-danger">{{ days }}</span>
                  <span class="text-black fw-medium">Days</span>
                </div>
                <div class="d-flex flex-column align-items-center bacolor">
                  <span class="fw-medium text-danger">{{ hours }}</span>
                  <span class="text-black fw-medium">Hours</span>
                </div>
                <div class="d-flex flex-column align-items-center bacolor">
                  <span class="fw-medium text-danger">{{ minutes }}</span>
                  <span class="text-black fw-medium">Minutes</span>
                </div>
                <div class="d-flex flex-column align-items-center bacolor">
                  <span class="fw-medium text-danger">{{ seconds }}</span>
                  <span class="text-black fw-medium">Seconds</span>
                </div>
              </div>
              <div class="btn2 mt-4">
                <button>Buy Now!</button>
              </div>
            </div>
            <div class="img-banner">
              <img
                src="../assets/imgs/Frame 694.png"
                alt="img-banner"
                class="imgbanner"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <OurProducts/>
  </div>
</template>

<script>
import OurProducts from '../pages/OurProducts.vue';

export default {
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  },
  components:{OurProducts},
  methods: {
    updateCountdown() {
      const targetDate = new Date("2024-09-07T23:59:59").getTime();
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
.banner-page {
  padding: 20px 0;
}
.banner {
  background-color: black;

  background-size: cover;
  border-radius: 4px;
}
.bacolor {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: bold !important;
}

.imgbanner {
  width: 100%;
}
.text p {
  color: var(--green);
}
.text h1 {
  line-height: 1.3;
}
</style>
