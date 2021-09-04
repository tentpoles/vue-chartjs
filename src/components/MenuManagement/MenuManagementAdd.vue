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
    <h3 class="list-child"><router-link :to="{ name: 'menu-management-index' }">Menu Management</router-link></h3>
    <span class="fas fa-chevron-right"></span>
    <h3 class="list-child">Add Menu</h3>
    </div>
    <div class="dashboard-content animate__animated animate__fadeIn">
      <div class="dashboard-page-control">
        <div class="left-control">
          
        </div>
        <div class="right-control" style="flex-shrink: 0;">
          <div class="show-entries-container">
            <p class="show-entries-label">Disabled</p>
            <span class="fas fa-toggle-on" style="font-size: 32px; cursor: pointer; color: var(--blue-color);" @click.prevent="toggleOnOff(event)"></span>
            <p class="show-entries-label">Active</p>
          </div>
        </div>
      </div>
      <form class="dashboard-form">
        <div class="form-left">
          <div class="input-group">
            <label for="menu-name" class="input-label">Menu</label>
            <input type="text" id="menu-name" class="input-text" placeholder="Menu Name">
          </div>
          <div class="input-group">
            <label for="level-name" class="input-label">Level</label>
            <select id="level-name" class="input-select">
              <option value="Top Level">Top Level</option>
            </select>
          </div>
          <div class="input-group">
            <label for="icon-name" class="input-label">Icon</label>
            <select id="icon-name" class="input-select">
              <option value="Top Level">Choose Icon</option>
            </select>
          </div>
          <div class="input-group">
            <p class="input-label" style="margin-top: 16px;">Config</p>
            <div class="checkbox-group">
              <input type="checkbox" id="insert-check">
              <label for="insert-check" class="input-label">Insert</label>
              <input type="checkbox" id="update-check">
              <label for="update-check" class="input-label">Update</label>
              <input type="checkbox" id="view-check">
              <label for="view-check" class="input-label">View</label>
              <input type="checkbox" id="delete-check">
              <label for="delete-check" class="input-label">Delete</label>
            </div>
          </div>
        </div>
        <div class="form-right">
          <div class="input-group">
            <label for="folder-name" class="input-label">Folder</label>
            <input type="text" id="folder-name" class="input-text" placeholder="Folder Name">
          </div>
          <div class="input-group">
            <label for="sorting" class="input-label">Sorting</label>
            <input type="text" id="sorting" class="input-text" placeholder="Sorting">
          </div>
          <div class="input-group">
            <label for="sorting" class="input-label">Description</label>
            <textarea id="sorting" class="input-textarea" placeholder="Description"></textarea>
          </div>
          <div class="input-group" style="display: flex; align-items: center; justify-content: flex-end; margin-top: 16px;">
            <router-link :to="{ name: 'menu-management-index' }"><span class="btn-cancel">Cancel</span></router-link>
            <router-link :to="{ name: 'menu-management-index' }"><button type="submit" class="btn-save">Save</button></router-link>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
  export default {
      components: {
    },
    methods: {
      toggleOnOff: function(event) {
        let toggle = document.querySelector('.fa-toggle-on');
        if(toggle.classList.contains('rotate-180')) {
          toggle.classList.remove("rotate-180");
        }
        else {
          toggle.classList.add("rotate-180");
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