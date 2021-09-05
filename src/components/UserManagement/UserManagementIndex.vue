<template>
    <div class="dashboard-subheader">
    <h2 class="page-title">User Management</h2>
    <span class="vertical-line"></span>
    <router-link :to="{ name: 'index' }">
        <span class="fa fa-home"></span>
    </router-link>
    <span class="fas fa-chevron-right"></span>
    <h3 class="list-parent">Administration</h3>
    <span class="fas fa-chevron-right"></span>
    <h3 class="list-child">User Management</h3>
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
            <router-link :to="{ name: 'user-management-add' }"><div class="btn-primary">Add User</div></router-link>
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
              <th>Full Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Mobile No.</th>
              <th>Date Created</th>
              <th>Created By</th>
              <th>Last Login</th>
              <th>Last Active</th>
              <th>Status</th>
              <th>Group</th>
              <th style="text-align: center;">Actions</th>
            </tr>
            <tr v-for="(person, index) in 10" :key="index">
              <td>{{ index+1 }}</td>
              <td>Jimi Multhazam</td>
              <td>jimijazz</td>
              <td>jimijazz@gmail.com</td>
              <td>0081240951</td>
              <td>17-08-1945</td>
              <td>morfem</td>
              <td>10:00AM 17-08-1945</td>
              <td>23:00PM 17-08-1945</td>
              <td>ONLINE</td>
              <td>Roman Underground</td>
              <td style="text-align: center;">
                <router-link :to="{ name: 'user-management-edit' }"><span class="btn-action far fa-edit"></span></router-link>
                <span class="btn-action far fa-trash-alt" @click.prevent="deleteUser(event)"></span>
              </td>
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
</template>

<script>
  export default {
      components: {
    },
    methods: {
      deleteUser: function(event) {
        let getId = document.getElementById('deleteUserManagement');
        if(getId.classList.contains('display-none')) {
          getId.classList.add('display-flex');
          getId.classList.remove('display-none');
        }
      }
    }
  }
</script>