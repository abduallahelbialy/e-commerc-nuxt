<template>
  <div>
    <AppNavbar />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from '../components/AppFooter.vue'
import AppNavbar from '../components/AppNavbar.vue'
export default {
  components: { AppFooter, AppNavbar },
}
</script>

<style scoped>
/* You can add custom styles here */

</style>
