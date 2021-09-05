<template>
    <footer class="animate__animated animate__fadeInUp animate__delay-2s">
        <span class="developer">Developed by B. Alkautsar <span class="hide-small">| Test case purpose only</span></span>
        <span class="social">
            <a href="https://www.instagram.com/tentpolesman"><i class='fab fa-instagram'></i></a>
            <a href="https://www.linkedin.com/in/b-alkautsar"><i class='fab fa-linkedin'></i></a>
            <a href="https://codepen.io/b-alkautsar"><i class='fab fa-codepen'></i></a>
            <a href="https://github.com/tentpoles"><i class='fab fa-github'></i></a>
        </span>
    </footer>
</template>
<script>
    export default {
    }
</script>
<style>
    @media (max-width: 460px) {
        footer .hide-small {
            display: none;
        }
    }
</style>