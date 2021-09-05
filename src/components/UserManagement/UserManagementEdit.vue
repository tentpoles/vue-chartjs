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
    <h3 class="list-child"><router-link :to="{ name: 'user-management-index' }">User Management</router-link></h3>
    <span class="fas fa-chevron-right"></span>
    <h3 class="list-parent">Edit User</h3>
    </div>
    <div class="dashboard-content animate__animated animate__fadeIn">
      <form>
        <h2 class="form-title">User Information</h2>
        <div class="dashboard-form">
          <div class="form-left">
            <div class="input-group">
              <label for="full-name" class="input-label">Menu</label>
              <input type="text" id="full-name" class="input-text" placeholder="Full Name">
            </div>
            <div class="input-group">
              <label for="department-name" class="input-label">Department Name</label>
              <input type="text" id="department-name" class="input-text" placeholder="Department Name">
            </div>
            <div class="input-group">
              <label for="email" class="input-label">Email</label>
              <input type="email" id="email" class="input-text" placeholder="your@email.com">
            </div>
          </div>
          <div class="form-right">
            <div class="input-group">
              <label for="nik" class="input-label">NIK</label>
              <input type="text" id="nik" class="input-text" placeholder="NIK">
            </div>
            <div class="input-group">
              <label for="phone-number" class="input-label">Phone Number</label>
              <input type="text" id="phone-number" class="input-text" placeholder="+628xxxxxxxx">
            </div>
          </div>
        </div>
        <div class="line-break"></div>
        <h2 class="form-title">User Account Data</h2>
        <div class="dashboard-form">
          <div class="form-left">
            <div class="input-group">
              <label for="username" class="input-label">Username</label>
              <input type="text" id="Username" class="input-text" placeholder="Username">
            </div>
            <div class="input-group">
              <label for="password" class="input-label">Password</label>
              <input type="password" id="password" class="input-text" placeholder="Password">
            </div>
            <div class="input-group">
              <label for="user-role" class="input-label">User Role</label>
              <select id="user-role" class="input-select">
                <option value="Choose user role">Choose user role</option>
              </select>
            </div>
          </div>
          <div class="form-right">
            <div class="input-group">
              <label class="input-label">Block Status</label>
              <select class="input-select">
                <option value="Choose block status">Choose block status</option>
              </select>
            </div>
            <div class="input-group">
              <label class="input-label">Login Status</label>
              <select class="input-select">
                <option value="+628xxxxxxxx">+628xxxxxxxx</option>
              </select>
            </div>
            <div class="input-group" style="display: flex; align-items: center; justify-content: flex-end; margin-top: 92px;">
              <router-link :to="{ name: 'user-management-index' }"><span class="btn-cancel">Cancel</span></router-link>
              <router-link :to="{ name: 'user-management-index' }"><button type="submit" class="btn-save">Save</button></router-link>
            </div>
          </div>
        </div>
        
      </form>
    </div>
</template>

<script>
  export default {
      components: {
    },
  }
</script>