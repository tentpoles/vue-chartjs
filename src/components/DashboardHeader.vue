<template>
    <div class="dashboard-header">
      <div class="dashboard-header-left">
        <div class="profile-picture">
          <div class="image-wrapper">
            <img src="https://imgsrv2.voi.id/zBUJnDr99ca9y6fS98CSGrwG0fXXELC9DQZFaPaqXOY/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy83MjYzNC8yMDIxMDgwMzE1MzUtbWFpbi5jcm9wcGVkXzE2Mjc5Nzk3NzkuanBn.jpg" alt="">
          </div>
        </div>
        <div class="profile-detail">
          <div class="profile-name">
            Akidi Tio
          </div>
          <div class="profile-type">
            Hacker Indonesia
          </div>
        </div>
      </div>
      <div class="dashboard-header-center">
        <div class="notification" @click.prevent="displayNotification(event)">
          <span class="far fa-bell dashboard-header-icon"></span>
          <span class="notification-count-wrapper">
            <span class="notification-count">0</span>
          </span>
          <span class="notification-list notification-list-off">
            <h2>Oops! You have no notification.</h2>
          </span>
        </div>
        <div class="dashboard-header-icon">
          <span class="far fa-calendar-alt"></span>
        </div>
        <div class="dashboard-header-icon">
          <span class="far fa-moon"></span>
        </div>
      </div>
      <div class="dashboard-header-right">
        <div class="language">
          <span class="language-flag">
            <img src="https://cdn.countryflags.com/thumbs/zimbabwe/flag-400.png" alt="">
          </span>
          <span class="language-text">Zimbabwe</span>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    methods: { 
      displayNotification: function(event) {
          /* Hide unhide notification */
          let notification = document.querySelector('.notification-list');
          if(!notification.classList.contains("notification-list-off")) {
            notification.classList.add("notification-list-off")
            notification.classList.remove("notification-list-on")
          }
          else {
            notification.classList.add("notification-list-on")
            notification.classList.remove("notification-list-off")
          }
          /* End */
      }
    }
  }
</script>