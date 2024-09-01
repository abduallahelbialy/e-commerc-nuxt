<template>
  <div class="contact">
    <div class="container">
      <div class="row">
        <div class="title">
          <span class="text-black-50 p-1"
            >Home<span class="p-1">/</span
            ><span class="text-dark fw-medium p-1">Contact</span></span
          >
        </div>
        <div class="col-lg-3 py-4">
          <div class="text-contact p-3">
            <div class="one">
              <div class="icon-phone d-flex gap-2 align-items-center mb-3">
                <i class="pi pi-phone text-white fs3"></i>
                <span class="fw-medium">Call To Us</span>
              </div>
              <div>
                <p class="text-black">We are available 24/7, 7 days a week.</p>
                <span class="text-black">Phone: +8801611112222</span>
              </div>
            </div>
            <hr />
            <div class="two">
              <div class="icon-phone d-flex gap-2 align-items-center mb-3 ">
                <i class="pi pi-envelope text-white fs3"></i>
                <span class="fw-medium">Write To US</span>
              </div>
              <div>
                <p class="text-black">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p class="text-black">Emails: customer@exclusive.com</p>
                <p class="text-black">Emails: support@exclusive.com</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-9 py-4">
          <div class="form-contect p-3">
            <form action="">
              <div
                class="d-flex justify-content-around align-items-center flex-wrap mb-2"
              >
                <div class="input-form mb-2">
                  <input type="text" placeholder="Your Name *" required />
                </div>
                <div class="input-form mb-2">
                  <input type="email" placeholder="Your Email *" required />
                </div>
                <div class="input-form">
                  <input type="tel" placeholder="Your Phone *" required />
                </div>
              </div>
              <div class="text-aree p-3 mt-2">
                <textarea placeholder="Your Massage"></textarea>
              </div>
              <div class="btn d-flex justify-content-end">
                <button type="submit">Send Massage</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contact {
  padding: 20px 0;
}
.text-contact {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 4px;
}

.icon-phone i {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--btn-color);
  display: flex;
  align-items: center;
  justify-content: center;
}
.form-contect {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 4px;
}
hr {
  border: 2px solid #979796;
}
.input-form input {
  background-color: #f5f5f5;
  padding: 12px 15px;
  border: none;
  width: 280px;
  outline: none;
}
.text-aree textarea {
   background-color: #f5f5f5;
 height: 100%;
  border: none;
  width: 100%;
  outline: none; 
padding: 10px;
resize: none;
height: 176px;
}
</style>
