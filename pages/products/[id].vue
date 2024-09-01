<template>
  <div class="details">
    <div class="container">
      <div class="row">
        <div class="title">
          <span class="text-black-50 p-1"
            >Account<span class="p-1">/</span
            ><span class="text-black-50 p-1"
              >Gaming /
              <span class="text-black fw-medium p-1"
                >Havic HV G-92 Gamepad</span
              ></span
            ></span
          >
        </div>
        <div class="d-flex justify-content-evenly pt-3 daa">
          <div class="product-container">
            <div class="image-gallery">
              <img
                v-for="(image, index) in product.images"
                :key="index"
                :src="image"
                alt="Product Image Thumbnail"
                @click="selectImage(index)"
                :class="{ selected: selectedImageIndex === index }"
              />
            </div>
            <!-- Main Product Image -->
            <div class="main-image">
              <img
                :src="product.images[selectedImageIndex]"
                alt="Main Product Image"
              />
            </div>
          </div>
          <!-- Product Details -->
          <div class="d-flex flex-column">
            <div class="product-details">
              <h1 class="text-nowrap">Havic HV G-92 Gamepad</h1>
            </div>
            <div class="rating d-flex gap-3">
              <span>⭐⭐⭐⭐</span> <span>(150 Reviews)</span>
              <p class="green">In Stock</p>
            </div>
            <div class="price">
              <p>$192.00</p>
            </div>
            <div class="description">
              <p>
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble free install & mess free
                removal Pressure sensitive.
              </p>
            </div>
            <!-- Color Selection -->
            <div class="colors d-flex gap-2">
              <span>Colours:</span>
              <button class="one"></button>
              <button class="two"></button>
            </div>
            <hr />
            <!-- Size Selection -->
            <div class="sizes d-flex gap-2">
              <span>Size:</span>
              <button>XS</button>
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XM</button>
            </div>
            <div
              class="d-flex justify-content-between align-items-center flex-wrap mt-3"
            >
              <div class="counter d-flex">
                <div class="div-btn">
                  <button class="px-2" @click="decreaseQuantity">-</button>
                </div>
                <div class="div-btn">
                  <input  v-model="quantity" min="1" />
                </div>
                <div class="div-btn">
                  <button class="px-2 bg-danger text-white" @click="increaseQuantity">+</button>
                </div>
              </div>
              <div class="btn">
                <button>Buy Now</button>
              </div>
              
            </div>
            <div class="Free mt-4">
              <div class="d-flex gap-2 align-items-center">
                <i class="pi pi-car text-black fs-4"></i>
                <div class="d-flex flex-column">
                  <p>Free Delivery</p>
                  <p>Enter your postal code for Delivery Availability</p>
                </div>
              </div>
            </div>
            <div class="Free">
              <div class="d-flex gap-2 align-items-center">
                <i class="pi pi-replay text-black fs-4"></i>
                <div class="d-flex flex-column">
                  <p>Return Delivery</p>
                  <p>Free 30 Days Delivery Returns. Details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../../assets/imgs/image 63.png";
import img2 from "../../assets/imgs/image 61.png";
import img3 from "../../assets/imgs/image 59.png";
import img4 from "../../assets/imgs/image 58.png";
import img5 from "../../assets/imgs/image 57.png";
export default {
  data() {
    return {
      product: {
        images: [img1, img2, img3, img4, img5],
      },
      selectedImageIndex: 0,
      selectedColorIndex: 0,
      selectedSizeIndex: 2,
      quantity: 1,
    };
  },
  methods: {
    selectImage(index) {
      this.selectedImageIndex = index;
    },
    selectColor(index) {
      this.selectedColorIndex = index;
    },
    selectSize(index) {
      this.selectedSizeIndex = index;
    },
    decreaseQuantity() {
      if (this.quantity > 1) this.quantity--;
    },
    increaseQuantity() {
      this.quantity++;
    },
  },
};
</script>

<style scoped>
.details {
  padding: 20px 0;
}
.product-container {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  gap: 20px;
}
.image-gallery img {
  width: 100%;
  padding: 5px;
  margin: 5px 0;
  max-width: 150px;
  cursor: pointer;
  border: 1px solid transparent;
  background-color: #f5f5f5;
}
.main-image {
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  border-radius: 4px;
}
.main-image img {
  width: 100%;
  /* max-width: 500px; */
  padding: 10px;
}
.product-details {
  display: flex;
  flex-direction: column;
}

.product-details h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.rating {
  font-size: 14px;
  margin-bottom: 10px;
}

.green {
  color: green;
}

.price {
  font-size: 28px;
  margin-bottom: 10px;
}
.colors button {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
}
.colors .one {
  background-color: #ff0000;
}
.colors .two {
  background-color: #000;
}
.sizes button {
  border: 2px solid #e5e4eb;
  border-radius: 4px;
  text-align: center;
  background-color: transparent;
}
.sizes button:focus {
  background-color: #ff0000;
  color: #fff;
}
.div-btn button {
  border: 1px solid #e5e4eb;
  padding: 5px;
}
.div-btn input{
        width: 35px;
    height: 36px;
    border: 1px solid #e5e4eb;
}
.div-btn i {
  border: 1px solid #ddd;
  padding: 5px;
  font-size: 30px;
}
.Free {
  padding: 10px 40px;
  height: auto;
  border: 3px solid #ddd;
}
@media (max-width: 477px) {
  .daa {
    flex-direction: column;
    align-items: center;
  }
  .main-image {
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 95%;
    border-radius: 4px;
    width: 187px;
    margin: auto;
  }
}
@media (max-width: 799px) {
  .daa {
    flex-direction: column;
    align-items: center;
  }
}
@media (max-width: 992px) {
  .daa {
    flex-direction: column;
    align-items: center;
  }
}
</style>
