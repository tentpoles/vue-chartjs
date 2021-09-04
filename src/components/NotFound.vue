<template>
    <div class="not-found">
        <img src="../assets/img/not-found-min.png" alt="" class="not-found-image animate__animated animate__zoomInDown">
        <h1 class="not-found-text animate__animated animate__bounceIn animate__delay-2s">Oops! Page not found.</h1>
        <router-link :to="{ name: 'index' }">
            <div class="btn-homepage animate__animated animate__bounceInUp animate__delay-1s"><i class="fas fa-long-arrow-alt-left"></i>&nbsp;&nbsp;HOMEPAGE</div>
        </router-link>
    </div>
</template>
<script>
    export default {
    }
</script>
<style>
    .not-found {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 100vh;
        padding: 12px;
        background: var(--white-color);
        overflow: hidden;
    }
    .not-found-image {
        width: 400px;
        max-width: 100%;
        margin-top: -32px;
    }
    .not-found-text {
        font-weight: var(--font-bold); 
        font-size: 24px;
        white-space: nowrap;
    }
    .btn-homepage {
        margin-top: 20px;
        background: #ce3452;
        padding: 11px 18px 12px 20px;
        letter-spacing: 0.3mm;
        border-radius: 6px;
        font-weight: var(--font-bold);
        font-size: 14px;
        color: var(--white-color);
        transition: all .25s ease-in-out;
    }
    .btn-homepage:hover {
        background: #d54f69;
    }
    .fa-long-arrow-alt-left {
        animation: arrow-left .7s infinite;
    }
    @media (max-width: 360px) {
        .not-found-text {
            font-size: 16px;
        }
        .btn-homepage {
            margin-top: 14px;
            padding: 12px 16px;
            letter-spacing: 0.3mm;
            font-size: 12px;
        }
    }
    @keyframes arrow-left {
        0% {
            transform: translateX(0);
        }
        25% {
            transform: translateX(-3px);
        }
        25% {
            transform: translateX(-5px);
        }
        75% {
            transform: translateX(-3px);
        }
    }
</style>