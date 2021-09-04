<template>
    <Navbar></Navbar>
    <div class="dashboard-container">
      <DashboardHeader></DashboardHeader>
      <div class="dashboard-subheader">
        <h2 class="page-title">Log Activity</h2>
        <span class="vertical-line"></span>
        <router-link :to="{ name: 'index' }">
          <span class="fa fa-home"></span>
        </router-link>
        <span class="fas fa-chevron-right"></span>
        <h3 class="list-parent">Administration</h3>
        <span class="fas fa-chevron-right"></span>
        <h3 class="list-child">Log Activity</h3>
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
          <div class="center-control">
            <div class="search-container">
              <input type="text" class="search-input" placeholder="Search">
              <span class="search-icon fas fa-search"></span>
            </div>
          </div>
          <div class="right-control">
            <div class="show-entries-container">
              <div class="show-entries">
                <select name="" id="" class="show-entries-select">
                  <option value="">Start Date</option>
                </select>
                <span class="fas fa-chevron-down"></span>
              </div>
              <p class="show-entries-label">to</p>
              <div class="show-entries">
                <select name="" id="" class="show-entries-select">
                  <option value="">End Date</option>
                </select>
                <span class="fas fa-chevron-down"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="dashboard-table">
          <table class="table-responsive">
            <tr>
              <th>No</th>
              <th>Action</th>
              <th>Username</th>
              <th>Ip Address</th>
              <th>Action</th>
              <th>Notes</th>
            </tr>
            <tr v-for="(person, index) in 10" :key="index">
              <td>{{ index+1 }}</td>
              <td>17-08-1945</td>
              <td>sigitpoernomo</td>
              <td>192.168.1.1</td>
              <td></td>
              <td>Lorem ipsum dolor sit amet consectetur.</td>
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
  }
</script>

<style>
</style>