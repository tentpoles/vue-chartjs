<template>
    <header class="navigation-container navigation-full">
      <nav class="navigation">
        <div class="hamburger-menu">
          <span class="fas fa-bars" @click.prevent="shrinkNavbar(event)"></span>
        </div>
        <ul class="nav">
          <li class="navlink">
            <router-link :to="{ name: 'index' }">
              <span class="fa fa-home navlink-icon"></span>
              <span class="navlink-text">Dashboard</span>
            </router-link>
          </li>
          <div class="navlink-group">
            <li class="navlink">
              <a class="display-flex" @click.prevent="navlinkGrupHide(event)">
                <span class="far fa-file-alt navlink-icon"></span>
                <span class="navlink-text">Administration</span>
                <span class="fas fa-chevron-down navlink-icon display-block"></span>
              </a>
            </li>
            <li class="navlink">
              <router-link :to="{ name: 'user-management-index' }" class="sub-navlink">
                <span class="far fa-dot-circle navlink-icon"></span>
                <span class="navlink-text">User Management</span>
              </router-link>
            </li>
            <li class="navlink">
              <router-link :to="{ name: 'role-management-index' }" class="sub-navlink">
                <span class="far fa-dot-circle navlink-icon"></span>
                <span class="navlink-text">Role Management</span>
              </router-link>
            </li>
            <li class="navlink">
              <router-link :to="{ name: 'menu-management-index' }" class="sub-navlink">
                <span class="far fa-dot-circle navlink-icon"></span>
                <span class="navlink-text">Menu Management</span>
              </router-link>
            </li>
            <li class="navlink">
              <router-link :to="{ name: 'session-management' }" class="sub-navlink">
                <span class="far fa-dot-circle navlink-icon"></span>
                <span class="navlink-text">Session Management</span>
              </router-link>
            </li>
            <li class="navlink">
              <router-link :to="{ name: 'variable-management' }" class="sub-navlink">
                <span class="far fa-dot-circle navlink-icon"></span>
                <span class="navlink-text">Variable Management</span>
              </router-link>
            </li>
            <li class="navlink">
              <router-link :to="{ name: 'log-activity' }" class="sub-navlink">
                <span class="far fa-dot-circle navlink-icon"></span>
                <span class="navlink-text">Log Activity</span>
              </router-link>
            </li>
          </div>
          <li class="navlink">
            <router-link :to="{ name: 'login' }">
              <span class="fas fa-sign-out-alt navlink-icon"></span>
              <span class="navlink-text">Log Out</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
</template>

<script>
  export default {
    methods: {
      shrinkNavbar: function(event) {
          /* Hide unhide sub navlink */
          let subNavlink = document.querySelectorAll('.sub-navlink');
          for (let i = 0; i < subNavlink.length; i++) {
            if(!subNavlink[i].classList.contains("visibility-hidden")) {
                subNavlink[i].classList.add("visibility-hidden");
            }
            else {
                subNavlink[i].classList.remove("visibility-hidden");
            }
          }
          /* End */

          /* Hide unhide navlink text */
          let navlinkText = document.querySelectorAll('.navlink-text');
          for (let i = 0; i < navlinkText.length; i++) {
            if(!navlinkText[i].classList.contains("display-none")) {
                navlinkText[i].classList.add("display-none");
            }
            else {
                navlinkText[i].classList.remove("display-none");
            }
          }
          /* End */
          
          /* Hide unhide arrow down */
          let arrowDown = document.querySelector('.fa-chevron-down');
          if(!arrowDown.classList.contains("display-block")) {
            arrowDown.classList.add("display-block")
            arrowDown.classList.remove("display-none")
          }
          else {
            arrowDown.classList.add("display-none")
            arrowDown.classList.remove("display-block")
          }
          /* End */

          /* Shrink unshrink navigation width */
          let navigation = document.querySelector('.navigation-container');
          if(!navigation.classList.contains("navigation-full")) {
            navigation.classList.add("navigation-full")
            navigation.classList.remove("navigation-shrink")
          }
          else {
            navigation.classList.add("navigation-shrink")
            navigation.classList.remove("navigation-full")
          }
          /* End */
      },
      navlinkGrupHide: function(event) { 
          /* Dropdown navlink */
          let navlinkGroup = document.querySelector('.navlink-group');
          if(!navlinkGroup.classList.contains("navlink-group-hide")) {
            navlinkGroup.classList.add("navlink-group-hide")
          }
          else {
            navlinkGroup.classList.remove("navlink-group-hide")
          }
          /* End */

          
          /* Rotate arrow down icon */
          let arrowDown = document.querySelector('.fa-chevron-down');
          if(!arrowDown.classList.contains("rotate-180deg")) {
            arrowDown.classList.add("rotate-180deg");
          }
          else {
            arrowDown.classList.remove("rotate-180deg");
          }
          /* End */
      }
    }
  }
</script>