<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="title">
          <span class="text-black-50 p-1"
            >Home<span class="p-1">/</span
            ><span class="text-dark fw-medium p-1">About</span></span
          >
        </div>
        <div
          class="d-flex justify-content-between align-items-center gap-3 flex-wrap"
        >
          <div class="text w-50">
            <h2>Our Story</h2>
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div class="img-about flex-grow-1">
            <img
              src="../assets/imgs/WhatsApp Image 2024-08-30 at 5.42.21 PM.jpeg"
              alt="img-about"
              class="imgAbout"
            />
          </div>
        </div>
        <div
          class="d-flex justify-content-between align-items-center flex-wrap mt-4 pt-5 pb-4 mb-3"
        >
          <div class="box m-auto mb-2" v-for="card in cards" :key="card.id">
            <div class="icon-container">
              <div class="icon-circle">
                <i :class="card.icon"></i>
              </div>
              <h3>{{ card.num }}</h3>
              <p>{{ card.des }}</p>
            </div>
          </div>
        </div>

        <div
          class=" all d-flex justify-content-between align-items-center flex-wrap mt-2 pt-2 "
        >
          <div class="celient mb-4" v-for="cleint in cleints" :key="cleint.id">
            <div class="img-celint">
              <img
                :src="cleint.img"
                alt="Founder"
                class="img-fluid imgCleint "
              />
            </div>
            <div class="info-text mt-2">
              <h1>{{ cleint.name }}</h1>
              <p>{{ cleint.postion }}</p>
            </div>
            <div class="icon-socila d-flex gap-4">
              <i :class="cleint.icon1"></i>
              <i :class="cleint.icon2"></i>
              <i :class="cleint.icon3"></i>
              
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
import imgcleint from "../assets/imgs/image 46.png"
import imgcleint2 from "../assets/imgs/image 47.png"
export default {
  data() {
    return {
      cleints: [
        {
          id: 1,
          name: "Tom Cruise",
          postion: "Founder & Chairman",
          icon1: "pi pi-twitter",
          icon2: "pi pi-instagram",
          icon3: "pi pi-linkedin",
          img:imgcleint,
        },
        {
          id: 2,
          name: "Abduallah",
          postion: "Founder & Chairman",
          icon1: "pi pi-twitter",
          icon2: "pi pi-instagram",
          icon3: "pi pi-linkedin",
          img:imgcleint2,
        },
        {
          id: 2,
          name: "Ahmed",
          postion: "Founder & Chairman",
          icon1: "pi pi-twitter",
          icon2: "pi pi-instagram",
          icon3: "pi pi-linkedin",
          img:imgcleint,
        },
      ],
      cards: [
        {
          id: 1,
          num: "10.5k",
          des: "Sallers active our site",
          icon: "pi pi-shop",
        },
        {
          id: 2,
          num: "33k",
          des: "Mopnthly Produduct Sale",
          icon: "pi pi-dollar ",
        },
        {
          id: 3,
          num: "45.5k",
          des: "Customer active in our site",
          icon: "pi pi-shopping-bag",
        },
        {
          id: 4,
          num: "25k",
          des: "Anual gross sale in our site",
          icon: " pi pi-amazon ",
        },
      ],
    };
  },
};
</script>
<style scoped>
.about {
  padding: 20px 0;
}
.imgAbout {
  width: 100%;
  border-radius: 4px;
  height: 100%;
  max-width: 600px;
}
.text h2 {
  line-height: 2;
}
.text p {
  line-height: 2;
}
.box {
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
  border: 1px solid #e5e4eb;
  border-radius: 4px;
  transition: 0.3s;
}
.box:hover{
  background-color: var(--btn-color);
  color:white;
}
.info-text h1 {
  font-size: 22px;
}
.img-celint {
  background-color: #f5f5f5;
  padding: 5px 30px;
}
.icon-container {
  text-align: center;
  margin-top: 20px;
}
.imgCleint{
  width: 100%;
  height: 100%;
  max-width: 300px;
}
.icon-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #d3d3d3;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 10px auto;
  position: relative;
}

.icon-circle i {
  font-size: 24px;
  color: #fff;
  background-color: #000;
  border-radius: 50%;
  padding: 20px;
}

h3 {
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0 5px;
}
@media (max-width: 477px) {
  .imgAbout {
    display: none;
  }
  .text {
    width: 100% !important;
  }
  .all{
        margin-top: 215px !important;
  }
  .celient{
    margin: auto;
  }
 

}
</style>
