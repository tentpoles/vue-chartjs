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
    <h3 class="list-child"><router-link :to="{ name: 'role-management-index' }">Role Management</router-link></h3>
    <span class="fas fa-chevron-right"></span>
    <h3 class="list-child">Access Settings</h3>
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
        <router-link :to="{ name: 'role-management-index' }">
          <div class="btn-secondary">Cancel</div>
        </router-link>
        <router-link :to="{ name: 'role-management-index' }">
          <div class="btn-primary">Save</div>
        </router-link>
      </div>
    </div>
    <div class="dashboard-table">
      <table class="table-responsive">
        <tr>
          <th>No</th>
          <th>Group</th>
          <th>Config</th>
          <th style="text-align: center;">Insert</th>
          <th style="text-align: center;">Update</th>
          <th style="text-align: center;">Delete</th>
          <th style="text-align: center;">View</th>
        </tr>
        <tr v-for="(person, index) in 10" :key="index">
          <td>{{ index+1 }}</td>
          <td>Kepakkan Sayap Kebhinekaan</td>
          <td>Insert, Delete, View</td>
          <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox" checked></td>
          <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox" checked></td>
          <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox"></td>
          <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox" checked></td>
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
  }
</script>

<style>
</style>