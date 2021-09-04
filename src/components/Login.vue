<template>
    <div class="login-container">
        <div class="login-card animate__animated animate__fadeIn animate__delay-1s">
            <form @submit.prevent="withoutSubmit()">
                <div class="input-group">
                    <label for="username" class="input-label">Username</label>
                    <input type="text" name="" id="username" class="input-text" placeholder="Username">
                </div>
                <div class="input-group">
                    <label for="password" class="input-label">Password</label>
                    <input type="password" name="" id="password" class="input-text" placeholder="Password">
                    <span class="far fa-eye" id="eye-icon" @click.prevent="displayPassword(event)"></span>
                </div>
                <div class="input-group" style="margin-bottom: 12px;">
                    <div class="captcha">
                        <input type="text" class="input-text" placeholder="Captcha">
                        <div class="captcha-code">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Captcha-smwm.svg/1200px-Captcha-smwm.svg.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="input-group checkbox-group">
                    <input type="checkbox" id="remember">
                    <label for="remember" class="checkbox-label">Remember Me</label>
                </div>
                <router-link :to="{ name: 'index' }"><button class="login-btn">Log In</button></router-link>
            </form>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            withoutSubmit: function(event) {
                event.preventDefault;
            },
            displayPassword: function(event) {
                const eyeIcon = document.getElementById('eye-icon');
                let inputPassword = document.getElementById('password');
                inputPassword.type == 'text' ? inputPassword.type = 'password' : inputPassword.type = 'text';
                if(eyeIcon.classList.contains("fa-eye")) {
                    eyeIcon.classList.remove("fa-eye");
                    eyeIcon.classList.add("fa-eye-slash");
                }
                else if(eyeIcon.classList.contains("fa-eye-slash")) {
                    eyeIcon.classList.remove("fa-eye-slash");
                    eyeIcon.classList.add("fa-eye");
                }
            }
        }
    }
</script>
