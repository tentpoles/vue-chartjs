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
    <h3 class="list-child">Menu Management</h3>
    </div>
    <div class="dashboard-content animate__animated animate__fadeIn">
      <div class="dashboard-page-control">
        <div class="left-control">
          <div class="show-entries-container">
            <p class="show-entries-label">Show</p>
            <div class="show-entries">
              <select name="" id="" class="show-entries-select">
                <option value="">8</option>
              </select>
              <span class="fas fa-chevron-down"></span>
            </div>
            <p class="show-entries-label">entries</p>
          </div>
          <router-link :to="{ name: 'menu-management-add' }"><div class="btn-primary">Add Menu</div></router-link>
        </div>
        <div class="center-control">
          <div class="search-container">
            <input type="text" class="search-input" placeholder="Search">
            <span class="search-icon fas fa-search"></span>
          </div>
        </div>
        <div class="right-control">
          <div class="btn-secondary">Cancel</div>
          <div class="btn-primary">Save</div>
        </div>
      </div>
      <div class="dashboard-table">
        <table class="table-responsive">
          <tr>
            <th>No</th>
            <th>Menu</th>
            <th>Folder</th>
            <th>Parent</th>
            <th>Description</th>
            <th>Status</th>
            <th style="text-align: center;">Icon</th>
            <th>Config</th>
            <th style="text-align: center;">Insert</th>
            <th style="text-align: center;">Update</th>
            <th style="text-align: center;">Delete</th>
           <th style="text-align: center;">View</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Dashboard</td>
            <td>Home</td>
            <td>Room Tracking</td>
            <td>Dashboard home</td>
            <td>ACTIVE</td>
            <td style="text-align: center; font-size: 14px;"><span class="fa fa-home"></span></td>
            <td>Insert, Delete, View</td>
            <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox" checked></td>
            <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox" checked></td>
            <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox"></td>
            <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox" checked></td>
          </tr>
          <tr>
            <td>2</td>
            <td>User Management</td>
            <td>Admin</td>
            <td>Room Tracking</td>
            <td>Manage users</td>
            <td>ACTIVE</td>
            <td style="text-align: center; font-size: 12px;"> <span class="far fa-dot-circle"></span></td>
            <td>Insert, Update, Delete, View</td>
            <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox" checked></td>
            <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox" checked></td>
            <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox" checked></td>
            <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox" checked></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Role Management</td>
            <td>Admin</td>
            <td>Administration</td>
            <td>Manage roles</td>
            <td>ACTIVE</td>
            <td style="text-align: center; font-size: 12px;"> <span class="far fa-dot-circle"></span></td>
            <td>Insert</td>
            <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox" checked></td>
            <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox"></td>
            <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox"></td>
            <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox"></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Menu Management</td>
            <td>Admin</td>
            <td>Room Tracking</td>
            <td>Manage menus</td>
            <td>ACTIVE</td>
            <td style="text-align: center; font-size: 12px;"> <span class="far fa-dot-circle"></span></td>
            <td>Update, Delete, View</td>
            <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox"></td>
            <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox" checked></td>
            <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox" checked></td>
            <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox" checked></td>
          </tr>
          <tr>
            <td>5</td>
            <td>Session Management</td>
            <td>Admin</td>
            <td>Room Tracking</td>
            <td>Manage sessions</td>
            <td>ACTIVE</td>
            <td style="text-align: center; font-size: 12px;"> <span class="far fa-dot-circle"></span></td>
            <td>Insert, Delete, View</td>
            <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox" checked></td>
            <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox"></td>
            <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox" checked></td>
            <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox" checked></td>
          </tr>
          <tr>
            <td>6</td>
            <td>Variable Parameters</td>
            <td>Admin</td>
            <td>Room Tracking</td>
            <td>Manage parameters</td>
            <td>ACTIVE</td>
            <td style="text-align: center; font-size: 12px;"> <span class="far fa-dot-circle"></span></td>
            <td>Insert, Update, Delete, View</td>
            <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox" checked></td>
            <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox" checked></td>
            <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox" checked></td>
            <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox" checked></td>
          </tr>
          <tr>
            <td>7</td>
            <td>Log Activity</td>
            <td>Admin</td>
            <td>Room Tracking</td>
            <td>See activities</td>
            <td>ACTIVE</td>
            <td style="text-align: center; font-size: 12px;"> <span class="far fa-dot-circle"></span></td>
            <td>Insert</td>
            <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox" checked></td>
            <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox"></td>
            <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox"></td>
            <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox"></td>
          </tr>
          <tr>
            <td>8</td>
            <td>Log Out</td>
            <td>Home</td>
            <td>Employee</td>
            <td>Log out</td>
            <td>ACTIVE</td>
            <td style="text-align: center; font-size: 14px;"> <span class="fas fa-sign-out-alt"></span></td>
            <td>Update, Delete</td>
            <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox"></td>
            <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox" checked></td>
            <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox" checked></td>
            <td style="text-align: center;"><input type="checkbox" class="menu-management-checkbox"></td>
          </tr>
        </table>
      </div>
      <div class="table-pagination">
        <div class="left">
          <span class="entries-count">Showing 1 to 8 of 8 entries</span>
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