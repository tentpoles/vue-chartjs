<template>
    <div class="modal-container display-none animate__animated animate__fadeIn" id="addVariableManagement">
      <div class="modal-card animate__animated animate__zoomInDown animate__delay-1s">
        <form style="width: 100%;">
          <h1 style="font-size: 15px; font-weight: var(--font-bold);">Add Parameter</h1>
          <div class="input-group">
              <label class="input-label">Parameter ID</label>
              <input type="text" name="" class="input-text" placeholder="Parameter ID">
          </div>
          <div class="input-group">
              <label class="input-label">Tabs</label>
              <input type="text" name="" class="input-text" placeholder="Tabs">
          </div>
          <div class="input-group">
              <label class="input-label">Parameter</label>
              <input type="text" name="" class="input-text" placeholder="Parameter">
          </div>
          <div class="input-group">
              <label class="input-label">Description</label>
              <textarea name="" class="input-textarea" placeholder="Description"></textarea>
          </div>
          <div style="display: flex; align-items: center; justify-content: flex-end;">
            <div class="btn-secondary" @click.prevent="closeAddVariable(event)" style="margin-right: 12px;">Cancel</div>
            <button class="btn-primary" @click.prevent="closeAddVariable(event)">Save</button>
          </div>
        </form>
      </div>
    </div>
    <div class="modal-container display-none animate__animated animate__fadeIn" id="editVariableManagement">
      <div class="modal-card animate__animated animate__backInDown animate__delay-1s">
        <form style="width: 100%;">
          <h1 style="font-size: 15px; font-weight: var(--font-bold);">Edit Parameter</h1>
          <div class="input-group">
              <label class="input-label">Parameter ID</label>
              <input type="text" name="" class="input-text" placeholder="Parameter ID" value="AB01240CD">
          </div>
          <div class="input-group">
              <label class="input-label">Tabs</label>
              <input type="text" name="" class="input-text" placeholder="Tabs" value="maling">
          </div>
          <div class="input-group">
              <label class="input-label">Parameter</label>
              <input type="text" name="" class="input-text" placeholder="Parameter" value="maling">
          </div>
          <div class="input-group">
              <label class="input-label">Description</label>
              <textarea name="" class="input-textarea" placeholder="Description">Juliari</textarea>
          </div>
          <div style="display: flex; align-items: center; justify-content: flex-end;">
            <div class="btn-secondary" @click.prevent="closeEditVariable(event)" style="margin-right: 12px;">Cancel</div>
            <button class="btn-primary" @click.prevent="closeEditVariable(event)">Save</button>
          </div>
        </form>
      </div>
    </div>
    <div class="modal-container display-none animate__animated animate__fadeIn" id="deleteVariableManagement">
      <div class="modal-card animate__animated animate__backInDown animate__delay-1s">
        <div style="width: 100%;">
          <p style="text-align: center; font-size: 14px; margin-bottom: 24px;">Are you sure want to delete this one?</p>
          <div style="display: flex; justify-content: center;">
            <div class="btn-secondary" @click.prevent="closeDeleteVariable(event)" style="margin-right: 12px;">Cancel</div>
            <button class="btn-primary" @click.prevent="closeDeleteVariable(event)">Delete</button>
          </div>
        </div>
      </div>
    </div>
    <Navbar></Navbar>
    <div class="dashboard-container">
      <DashboardHeader></DashboardHeader>
      <div class="dashboard-subheader">
        <h2 class="page-title">Variable Management</h2>
        <span class="vertical-line"></span>
        <router-link :to="{ name: 'index' }">
          <span class="fa fa-home"></span>
        </router-link>
        <span class="fas fa-chevron-right"></span>
        <h3 class="list-parent">Administration</h3>
        <span class="fas fa-chevron-right"></span>
        <h3 class="list-child">Variable Management</h3>
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
            <div class="btn-primary" @click.prevent="addVariable(event)">Add Parameter</div>
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
              <th>Parameter Id</th>
              <th>Description</th>
              <th>Tabs</th>
              <th>Parameters</th>
              <th style="text-align: center;">Actions</th>
            </tr>
            <tr v-for="(person, index) in 10" :key="index">
              <td>{{ index+1 }}</td>
              <td>AB01240CD</td>
              <td>Juliari</td>
              <td>maling</td>
              <td>maling</td>
              <td style="text-align: center;">
                <span class="btn-action far fa-edit" @click.prevent="editVariable(event)"></span>
                <span class="btn-action far fa-trash-alt" @click.prevent="deleteVariable(event)"></span>
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
      addVariable: function(event) {
        let getId = document.getElementById('addVariableManagement');
        if(getId.classList.contains('display-none')) {
          getId.classList.add('display-flex');
          getId.classList.remove('display-none');
        }
      },
      closeAddVariable: function(event) {
        let getId = document.getElementById('addVariableManagement');
        if(getId.classList.contains('display-flex')) {
          getId.classList.add('display-none');
          getId.classList.remove('display-flex');
        }
      },
      editVariable: function(event) {
        let getId = document.getElementById('editVariableManagement');
        if(getId.classList.contains('display-none')) {
          getId.classList.add('display-flex');
          getId.classList.remove('display-none');
        }
      },
      closeEditVariable: function(event) {
        let getId = document.getElementById('editVariableManagement');
        if(getId.classList.contains('display-flex')) {
          getId.classList.add('display-none');
          getId.classList.remove('display-flex');
        }
      },
      deleteVariable: function(event) {
        let getId = document.getElementById('deleteVariableManagement');
        if(getId.classList.contains('display-none')) {
          getId.classList.add('display-flex');
          getId.classList.remove('display-none');
        }
      },
      closeDeleteVariable: function(event) {
        let getId = document.getElementById('deleteVariableManagement');
        if(getId.classList.contains('display-flex')) {
          getId.classList.add('display-none');
          getId.classList.remove('display-flex');
        }
      }
    }
  }
</script>

<style>
</style>