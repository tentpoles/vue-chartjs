<template>
    <Navbar></Navbar>
    <div class="dashboard-container">
      <DashboardHeader></DashboardHeader>
      <router-view></router-view>
      <Footer></Footer>
    </div>
</template>

<script>
  import Navbar from '../Navbar.vue'
  import DashboardHeader from '../DashboardHeader.vue'
  import Footer from '../Footer.vue'
  export default {
      components: {
        Navbar,
        DashboardHeader,
        Footer,
    },
  }
</script>

<style>
</style>