<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="d-flex justify-center align-items-center">
          <div class="col-lg-8 p-3 m-auto">
            <div class="img-form">
              <img src="../assets/imgs/Side Image.png" alt="" class="imgFrom" />
            </div>
          </div>
          <div class="col-lg-4 p-3 m-auto">
            <div class="text-form">
              <div class="titla mb-4">
                <h1>Log in to Exclusive</h1>
                <p class="fw-medium">Enter your details below</p>
              </div>
              <form @submit.prevent="handleSubmit" class="d-flex flex-column">
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
                <div v-if="errors.general" class="text-danger">{{ errors.general }}</div>

                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn mt-3 mb-2">
                    <button type="submit">Log In</button>
                  </div>
                  <span class="text-danger cursor-pointer">Forget Password?</span>
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
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: '',
      errors: {}
    };
  },
  computed: {
    ...mapGetters(['getUser'])
  },
  methods: {
  handleSubmit() {
    this.errors = this.validateForm();
    if (Object.keys(this.errors).length === 0) {
      if (this.email !== this.getUser.email) {
        this.errors.general = 'No user found with this email address';
      } else if (this.password !== this.getUser.password) {
        this.errors.general = 'Invalid email or password';
      } else {
        // تحديث حالة تسجيل الدخول في Vuex
        this.$store.commit('setUser', { email: this.email });
        alert('Logged in successfully!');
        this.$router.push('/');
      }
    }
  },
  validateForm() {
    const errors = {};

    if (!this.email) {
      errors.email = 'Email or Phone Number is required';
    }

    if (!this.password) {
      errors.password = 'Password is required';
    }

    return errors;
  }
}

};
</script>


<style  scoped>
.login{
    padding: 20px 0;
}
.is-invalid {
  border-color: red;
}
.text-danger {
  color: red;
  font-size: 0.875rem;
}
.cursor-pointer {
  cursor: pointer;
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