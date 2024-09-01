<template>
    <div class="login">
    <div class="container">
      <div class="row">
        <div class="d-flex justify-center  align-items-center">

        <div class="col-lg-8 p-3">
          <div class="img-form">
            <img src="../assets/imgs/Side Image.png" alt="" class="imgFrom" />
          </div>
        </div>
        <div class="col-lg-4 p-3">
          <div class="text-form">
            <div class="titla mb-4">
              <h1>Log in to Exclusive</h1>
              <p class=" fw-medium">Enter your details below</p>
            </div>
            <form action="" class="d-flex flex-column">
              
              <div class="mb-3">
                <input type="email" placeholder="Email or Phone Number" />
              </div>
              <div class="mb-3">
                <input type="Password" placeholder="Password" />
              </div>
              <div class="d-flex justify-content-between align-items-center">

              <div class="btn mt-3 mb-2">
                <button > Log In</button>
              </div>
              <span class=" text-danger cursor-pointer">Forget Password?</span>
              </div>
             
            </form>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
.login{
    padding: 20px 0;
}
form div input {
  background-color: transparent;
  border-radius: 4px;
  border: none;
  padding: 5px 10px;
  width: 100%;
  border-bottom: 2px solid #b6b6b6;
}
.titla h1{
  font-size: 30px;
  line-height: 2;
}
.imgFrom {
  width: 100%;
  height: 100%;
  max-width: 550px;
}
.cursor-pointer{
    cursor: pointer;
}
@media (max-width:477px) {
  .col-lg-8 {
    display: none;
  }
}
@media (max-width:799px) {
  .col-lg-8 {
    display: none;
  }
}
@media (max-width:992px) {
  .col-lg-8 {
    display: none;
  }
}
@media (max-width:1024px) {
 .imgFrom{
    width: 100%;
    height: 100%;
    max-width: 485px;
}
}
</style>