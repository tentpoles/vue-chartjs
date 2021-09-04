<template>
    <div class="modal-container display-none animate__animated animate__fadeIn" id="deleteRoleManagement">
      <div class="modal-card animate__animated animate__backInDown animate__delay-1s">
        <div style="width: 100%;">
          <p style="text-align: center; font-size: 14px; margin-bottom: 24px;">Are you sure want to delete this one?</p>
          <div style="display: flex; justify-content: center;">
            <div class="btn-secondary" @click.prevent="closeDeleteRole(event)" style="margin-right: 12px;">Cancel</div>
            <button class="btn-primary" @click.prevent="closeDeleteRole(event)">Delete</button>
          </div>
        </div>
      </div>
    </div>
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
    methods: {
      closeDeleteRole: function(event) {
        let getId = document.getElementById('deleteRoleManagement');
        if(getId.classList.contains('display-flex')) {
          getId.classList.add('display-none');
          getId.classList.remove('display-flex');
        }
      },
    }
  }
</script>

<style>
</style>