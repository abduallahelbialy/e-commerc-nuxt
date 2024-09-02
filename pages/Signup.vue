<template>
  <div class="Sign">
    <div class="container">
      <div class="row">
        <div class="d-flex justify-center  align-items-center">

        <div class="col-lg-8 p-3 m-auto">
          <div class="img-form">
            <img src="../assets/imgs/Side Image.png" alt="" class="imgFrom" />
          </div>
        </div>
        <div class="col-lg-4 p-3 m-auto">
            <div class="text-form">
              <div class="titla mb-4">
                <h1>Create an account</h1>
                <p class="fw-medium">Enter your details below</p>
              </div>
              <form @submit.prevent="handleSubmit" class="d-flex flex-column">
                <div class="mb-3">
                  <input
                    type="text"
                    v-model="name"
                    placeholder="Name"
                    :class="{'is-invalid': errors.name}"
                  />
                  <div v-if="errors.name" class="text-danger">{{ errors.name }}</div>
                </div>
                <div class="mb-3">
                  <input
                    type="email"
                    v-model="email"
                    placeholder="Email or Phone Number"
                    :class="{'is-invalid': errors.email}"
                  />
                  <div v-if="errors.email" class="text-danger">{{ errors.email }}</div>
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    v-model="password"
                    placeholder="Password"
                    :class="{'is-invalid': errors.password}"
                  />
                  <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
                </div>
                <div class="btn mt-3 mb-2">
                  <button class="w-100" type="submit" >Create Account</button>
                </div>
              </form>
              <div class="d-flex justify-center flex-column align-items-center">

              <div class="btn3 mt-3 mb-2">
                <button color="google">
                  <img src="../assets/imgs/Icon-Google.png" alt="" class="px-2" />
                 Sign up with Google
                </button>
              </div>
              <div class="Already m-auto mt-2">
                <span>Already have account? 
                  <nuxt-link to="/Login"><span>Log in</span></nuxt-link>
                </span>
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
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      errors: {}
    };
  },
 methods: {
    ...mapActions(['registerUser']),
    handleSubmit() {
      this.errors = this.validateForm();
      if (Object.keys(this.errors).length === 0) {
        // إذا لم تكن هناك أخطاء، قم بحفظ البيانات في Vuex
        this.registerUser({
          name: this.name,
          email: this.email,
          password: this.password
        });

        // التوجه إلى صفحة تسجيل الدخول
        this.$router.push('/login');
      }
    },
    validateForm() {
      const errors = {};

      if (!this.name) {
        errors.name = 'Name is required';
      }

      if (!this.email) {
        errors.email = 'Email is required';
      } else if (!this.validEmail(this.email)) {
        errors.email = 'Please enter a valid email address';
      }

      if (!this.password) {
        errors.password = 'Password is required';
      } else if (this.password.length < 6) {
        errors.password = 'Password must be at least 6 characters long';
      }

      return errors;
    },
    validEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.[^<>()[\]\.,;:\s@"]{2,}))$/i;
      return re.test(email);
    }
  }
};
</script>
<style scoped>
.Sign {
  padding: 20px 0;
}
a{
 color: black;
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
.is-invalid {
  border-color: red;
}
.text-danger {
  color: red;
  font-size: 0.875rem;
}
.imgFrom {
  width: 100%;
  height: 100%;
  max-width: 550px;
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
