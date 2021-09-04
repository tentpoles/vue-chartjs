<template>
    <Navbar></Navbar>
    <div class="dashboard-container">
      <DashboardHeader></DashboardHeader>
      <div class="dashboard-subheader">
        <h2 class="page-title">Session Management</h2>
        <span class="vertical-line"></span>
        <router-link :to="{ name: 'index' }">
          <span class="fa fa-home"></span>
        </router-link>
        <span class="fas fa-chevron-right"></span>
        <h3 class="list-parent">Administration</h3>
        <span class="fas fa-chevron-right"></span>
        <h3 class="list-child">Session Management</h3>
      </div>
      <div class="dashboard-content animate__animated animate__fadeIn">
        <div class="dashboard-page-control">
          <div class="left-control">
            <div class="show-entries-container">
              <p class="show-entries-label">Show</p>
              <div class="show-entries">
                <select name="" id="" class="show-entries-select">
                  <option value="">10</option>
                </select>
                <span class="fas fa-chevron-down"></span>
              </div>
              <p class="show-entries-label">entries</p>
            </div>
          </div>
          <div class="right-control">
            <div class="search-container">
              <input type="text" class="search-input" placeholder="Search">
              <span class="search-icon fas fa-search"></span>
            </div>
          </div>
        </div>
        <div class="dashboard-table">
          <table class="table-responsive">
            <tr>
              <th>No</th>
              <th>Nik</th>
              <th>Name</th>
              <th>Username</th>
              <th style="text-align: center;">Login</th>
            </tr>
            <tr v-for="(person, index) in 10" :key="index">
              <td>{{ index+1 }}</td>
              <td>3511059100000</td>
              <td>Nadim Makarim</td>
              <td>nadi3m</td>
              <td style="text-align: center;"><span class="fas fa-toggle-on" style="font-size: 32px; cursor: pointer; color: var(--blue-color);" @click.prevent="toggleOnOff(event)"></span></td>
            </tr>
          </table>
        </div>
        <div class="table-pagination">
          <div class="left">
            <span class="entries-count">Showing 1 to 10 of 10 entries</span>
          </div>
          <div class="right">
            <div class="btn-previous">
              <span class="fa fa-chevron-left"></span>
            </div>
            <div class="page-number">
              1
            </div>
            <div class="btn-next">
              <span class="fa fa-chevron-right"></span>
            </div>
          </div>
        </div>
      </div>
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
    methods: {
      toggleOnOff: function(event) {
        let toggle = document.querySelectorAll('.fa-toggle-on');
        for(let i = 0; i < toggle.length; i++) {
          if(toggle[i].classList.contains('rotate-180')) {
            toggle[i].classList.remove("rotate-180");
          }
          else {
            toggle[i].classList.add("rotate-180");
          }
        }
      }
    }
  }
</script>
<style>
  .rotate-180 {
    transform: rotate(180deg);
    color: var(--primary-text-color) !important;
    opacity: 0.25;
  }
</style>