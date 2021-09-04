<template>
    <div class="dashboard-subheader">
      <h2 class="page-title">Role Management</h2>
      <span class="vertical-line"></span>
      <router-link :to="{ name: 'index' }">
          <span class="fa fa-home"></span>
      </router-link>
      <span class="fas fa-chevron-right"></span>
      <h3 class="list-parent">Administration</h3>
      <span class="fas fa-chevron-right"></span>
      <h3 class="list-child">Role Management</h3>
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
          <div class="btn-primary">Add Group</div>
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
            <th>Group Name</th>
            <th style="text-align: center;">Actions</th>
          </tr>
          <tr v-for="(person, index) in 10" :key="index">
            <td>{{ index+1 }}</td>
            <td>Kepakkan Sayap Kebhinekaan</td>
            <td style="text-align: center;">
              <div class="button-group">
                <span class="btn-edit-outline">Edit</span>
                <router-link :to="{ name: 'role-management-access' }"><span class="btn-access-outline">Access Setings</span></router-link>
                <span class="btn-delete-outline" @click.prevent="deleteRole(event)">Delete</span>
              </div>
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
      deleteRole: function(event) {
        let getId = document.getElementById('deleteRoleManagement');
        if(getId.classList.contains('display-none')) {
          getId.classList.add('display-flex');
          getId.classList.remove('display-none');
        }
      }
    }
  }
</script>

<style>
</style>