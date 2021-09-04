<template>
    <Navbar></Navbar>
    <StressLineChart></StressLineChart>
</template>

<script>
  import Navbar from './Navbar.vue'
  import StressLineChart from './StressLineChart.vue'
  export default {
      components: {
        Navbar,
        StressLineChart,
    },
  }
</script>

<style>
</style>